package vn.cinemahub.cinemahub.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import vn.cinemahub.cinemahub.dto.FileInfo;
import vn.cinemahub.cinemahub.payload.response.MessageResponse;
import vn.cinemahub.cinemahub.serviceImpl.FilesStorageService;

import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class FilesResource {
    @Autowired
    FilesStorageService storageService;

    @PostMapping("/upload")
    public ResponseEntity<MessageResponse> uploadFiles(@RequestParam("files") MultipartFile file) {
        String message = "";
        try {
            UUID uuid = UUID.randomUUID();
            String fileNames = uuid.toString() + "_"+ file.getOriginalFilename();


            storageService.save(file, fileNames);
//            Arrays.asList(files).stream().forEach(file -> {
//                storageService.save(file);
//                fileNames.add(file.getOriginalFilename());
//            });

            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(fileNames));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            message = "Fail to upload files!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }
// Lấy đường link của list file
    @GetMapping("/files")
    public ResponseEntity<List<FileInfo>> getListFiles() {
        List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
            String filename = path.getFileName().toString();
            String url = MvcUriComponentsBuilder
                    .fromMethodName(FilesResource.class,"getFile", path.getFileName().toString()).build().toString();
            return new FileInfo(filename, url);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
    }
//    @GetMapping("/files/{filename}")
//    public ResponseEntity<String> getFile(@PathVariable String filename) {
//        String file = storageService.load(filename);
//        return ResponseEntity.ok(file);
////                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//    }
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = storageService.load(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}

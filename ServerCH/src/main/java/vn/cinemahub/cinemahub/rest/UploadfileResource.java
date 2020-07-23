package vn.cinemahub.cinemahub.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import vn.cinemahub.cinemahub.dto.FileInfo;
import vn.cinemahub.cinemahub.entities.Uploadfile;

import java.io.File;
import java.util.List;

public class UploadfileResource {
    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("uploadfile", new Uploadfile());
        return "index";
    }

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public String uploadFile(Uploadfile uploadfile, Model model) {
        model.addAttribute("message", "Upload success");
        model.addAttribute("description", uploadfile.getDescription());
        try {
            MultipartFile multipartFile = uploadfile.getMultipartFile();
            String fileName = multipartFile.getOriginalFilename();
            File file = new File(this.getFolderUpload(), fileName);
            multipartFile.transferTo(file);
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("message", "Upload failed");
        }
        return "result";
    }

    public File getFolderUpload() {
        File folderUpload = new File(System.getProperty("user.home") + "/Uploads");
        if (!folderUpload.exists()) {
            folderUpload.mkdirs();
        }
        return folderUpload;
    }
}

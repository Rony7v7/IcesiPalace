package com.equipodiscreto.IcesiPalace.FileSaver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class FileSaverUtil {

    @Value("${BUCKET_NAME}")
    private final String BUCKET_NAME;

    @Value("${PROJECT_ID}")
    private final String PROJECT_ID;

    public String uploadFile(@RequestBody MultipartFile file) throws IOException {
        StorageOptions options = StorageOptions.newBuilder()
                .setProjectId(PROJECT_ID)
                .setCredentials(
                        ServiceAccountCredentials.fromStream(new FileInputStream(".vscode/accesToStorage.json")))
                .build();

        Storage storage = options.getService();
        UUID uuid = UUID.randomUUID();
        String fileName = uuid.toString() + file.getOriginalFilename();
        BlobId blobId = BlobId.of(BUCKET_NAME, fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        storage.create(blobInfo, file.getBytes());
        return "https://storage.googleapis.com/" + BUCKET_NAME + "/" + fileName;
    }
}

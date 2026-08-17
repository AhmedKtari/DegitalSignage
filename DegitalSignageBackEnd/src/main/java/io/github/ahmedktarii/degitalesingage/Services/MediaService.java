package io.github.ahmedktarii.degitalesingage.Services;

import io.github.ahmedktarii.degitalesingage.Entities.Media;
import io.github.ahmedktarii.degitalesingage.Repositories.MediaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    public void save(Media media) {
        mediaRepository.save(media);
    }
}


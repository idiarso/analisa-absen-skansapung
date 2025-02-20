import 'dart:convert';
import 'package:flutter/foundation.dart';
import '../models/photo.dart';
import '../repositories/photo_repository.dart';
import './app_provider.dart';

class FaceRecognitionNotifier extends AppProvider {
  final PhotoRepository _photoRepository;
  Photo? _currentPhoto;

  FaceRecognitionNotifier(this._photoRepository);

  Photo? get currentPhoto => _currentPhoto;

  Future<void> processPhoto(List<int> photoBytes) async {
    try {
      setLoading(true);
      setError(null);

      final photo = await _photoRepository.uploadProfilePhoto(photoBytes);
      _currentPhoto = photo;
      setError(null);
    } catch (e) {
      setError(e.toString());
    } finally {
      setLoading(false);
    }
  }

  Future<void> deleteCurrentPhoto() async {
    if (_currentPhoto != null) {
      try {
        setLoading(true);
        await _photoRepository.deleteProfilePhoto(_currentPhoto!.id);
        _currentPhoto = null;
      } catch (e) {
        setError(e.toString());
      } finally {
        setLoading(false);
      }
    }
  }
}
import 'dart:convert';
import 'package:flutter/foundation.dart';
import '../models/photo.dart';
import '../repositories/photo_repository.dart';

class FaceRecognitionNotifier extends ChangeNotifier {
  final PhotoRepository _photoRepository;
  Photo? _currentPhoto;
  bool _isProcessing = false;
  String? _error;

  FaceRecognitionNotifier(this._photoRepository);

  Photo? get currentPhoto => _currentPhoto;
  bool get isProcessing => _isProcessing;
  String? get error => _error;

  Future<void> processPhoto(List<int> photoBytes) async {
    try {
      _isProcessing = true;
      _error = null;
      notifyListeners();

      final photo = await _photoRepository.uploadProfilePhoto(photoBytes);
      _currentPhoto = photo;
      _error = null;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isProcessing = false;
      notifyListeners();
    }
  }

  Future<void> deleteCurrentPhoto() async {
    if (_currentPhoto != null) {
      try {
        await _photoRepository.deleteProfilePhoto(_currentPhoto!.id);
        _currentPhoto = null;
        notifyListeners();
      } catch (e) {
        _error = e.toString();
        notifyListeners();
      }
    }
  }
}
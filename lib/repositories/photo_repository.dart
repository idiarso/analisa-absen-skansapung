import '../models/photo.dart';
import '../services/photo_api_service.dart';

class PhotoRepository {
  final PhotoApiService _photoApiService;

  PhotoRepository(this._photoApiService);

  Future<List<int>> getPhotoBytes(String photoUrl) {
    return _photoApiService.getPhotoBytes(photoUrl);
  }

  Future<Photo> uploadProfilePhoto(List<int> photoBytes) {
    return _photoApiService.uploadProfilePhoto(photoBytes);
  }

  Future<void> deleteProfilePhoto(String photoId) {
    return _photoApiService.deleteProfilePhoto(photoId);
  }
}
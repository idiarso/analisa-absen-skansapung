import 'dart:convert';
import 'package:dio/dio.dart';
import '../models/photo.dart';
import '../services/photo_api_service.dart';

class PhotoRepository {
  final PhotoApiService _photoApiService;

  PhotoRepository(this._photoApiService);

  Future<List<int>> getPhotoBytes(String photoUrl) async {
    try {
      final response = await _photoApiService.getPhotoBytes(photoUrl);
      return response.data;
    } on DioException catch (e) {
      throw _handleDioError(e);
    }
  }

  Future<Photo> uploadProfilePhoto(List<int> photoBytes) async {
    try {
      final response = await _photoApiService.uploadProfilePhoto(photoBytes);
      return Photo.fromJson(response.data);
    } on DioException catch (e) {
      throw _handleDioError(e);
    }
  }

  Future<void> deleteProfilePhoto(String photoId) async {
    try {
      await _photoApiService.deleteProfilePhoto(photoId);
    } on DioException catch (e) {
      throw _handleDioError(e);
    }
  }

  Exception _handleDioError(DioException error) {
    switch (error.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.sendTimeout:
      case DioExceptionType.receiveTimeout:
        return Exception('Connection timeout');
      case DioExceptionType.badResponse:
        return Exception('Server error: ${error.response?.statusCode}');
      default:
        return Exception('Network error occurred');
    }
  }
}
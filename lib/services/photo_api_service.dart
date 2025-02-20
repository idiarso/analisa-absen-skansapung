import 'dart:convert';
import 'dart:typed_data';
import 'package:dio/dio.dart';
import 'package:retrofit/retrofit.dart';
import '../models/photo.dart';

part 'photo_api_service.g.dart';

@RestApi()
abstract class PhotoApiService {
  factory PhotoApiService(Dio dio, {String baseUrl}) = _PhotoApiService;

  @GET('/photos/{url}')
  Future<HttpResponse<List<int>>> getPhotoBytes(@Path('url') String photoUrl);

  @POST('/photos')
  Future<HttpResponse<Map<String, dynamic>>> uploadProfilePhoto(@Body() List<int> photoBytes);

  @DELETE('/photos/{id}')
  Future<HttpResponse<void>> deleteProfilePhoto(@Path('id') String photoId);
}
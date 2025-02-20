import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/photo.dart';

abstract class PhotoApiService {
  Future<List<int>> getPhotoBytes(String photoUrl);
  Future<Photo> uploadProfilePhoto(List<int> photoBytes);
  Future<void> deleteProfilePhoto(String photoId);
}

class PhotoApiServiceImpl implements PhotoApiService {
  final String baseUrl;
  final http.Client client;

  PhotoApiServiceImpl({
    required this.baseUrl,
    required this.client,
  });

  @override
  Future<List<int>> getPhotoBytes(String photoUrl) async {
    final response = await client.get(Uri.parse(photoUrl));
    if (response.statusCode == 200) {
      return response.bodyBytes;
    }
    throw Exception('Failed to load photo');
  }

  @override
  Future<Photo> uploadProfilePhoto(List<int> photoBytes) async {
    final base64Image = base64Encode(photoBytes);
    final response = await client.post(
      Uri.parse('$baseUrl/photos'),
      body: json.encode({'photo': base64Image}),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      return Photo.fromJson(json.decode(response.body));
    }
    throw Exception('Failed to upload photo');
  }

  @override
  Future<void> deleteProfilePhoto(String photoId) async {
    final response = await client.delete(
      Uri.parse('$baseUrl/photos/$photoId'),
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to delete photo');
    }
  }
}
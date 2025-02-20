import 'dart:convert';

class Photo {
  final String id;
  final String url;
  final String base64Data;

  Photo({
    required this.id,
    required this.url,
    required this.base64Data,
  });

  factory Photo.fromJson(Map<String, dynamic> json) {
    return Photo(
      id: json['id'] as String,
      url: json['url'] as String,
      base64Data: json['base64Data'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'url': url,
      'base64Data': base64Data,
    };
  }
}
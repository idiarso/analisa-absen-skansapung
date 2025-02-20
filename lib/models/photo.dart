import 'package:json_annotation/json_annotation.dart';

part 'photo.g.dart';

@JsonSerializable()
class Photo {
  final String id;
  final String url;
  @JsonKey(name: 'base64_data')
  final String base64Data;

  const Photo({
    required this.id,
    required this.url,
    required this.base64Data,
  });

  factory Photo.fromJson(Map<String, dynamic> json) => _$PhotoFromJson(json);
  Map<String, dynamic> toJson() => _$PhotoToJson(this);
}
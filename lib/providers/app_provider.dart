import 'package:flutter/foundation.dart';

abstract class AppProvider extends ChangeNotifier {
  bool _isLoading = false;
  String? _error;

  bool get isLoading => _isLoading;
  String? get error => _error;

  @protected
  void setLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  @protected
  void setError(String? value) {
    _error = value;
    notifyListeners();
  }
}
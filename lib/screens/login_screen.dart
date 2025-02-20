import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/face_recognition_notifier.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
      ),
      body: Consumer<FaceRecognitionNotifier>(
        builder: (context, notifier, child) {
          if (notifier.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (notifier.error != null) {
            return Center(child: Text(notifier.error!));
          }

          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (notifier.currentPhoto != null)
                  Image.memory(
                    base64Decode(notifier.currentPhoto!.base64Data),
                    width: 200,
                    height: 200,
                  ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    // Implement photo capture logic
                  },
                  child: const Text('Capture Photo'),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
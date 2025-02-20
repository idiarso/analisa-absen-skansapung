import 'package:absen_smkn1_punggelan/core/constant/constant.dart';
import 'package:absen_smkn1_punggelan/core/network/data_state.dart';
import 'package:retrofit/retrofit.dart';
import 'package:dio/dio.dart';

part 'schedule_api_service.g.dart';

@RestApi(baseUrl: BASE_URL)
abstract class ScheduleApiService {
  factory ScheduleApiService(Dio dio) {
    return _ScheduleApiService(dio);
  }

  @GET('/api/get-schedule')
  Future<HttpResponse<DataState>> get();

  @POST('/api/banned')
  Future<HttpResponse<DataState>> banned();
}

import 'package:http/http.dart'as http ;

import '../../../constant/constant.dart';
import '../../exceptions/custom_error.dart';
import '../../exceptions/handler_error.dart';
import '../../models/exceptions_model/error_model.dart';




class CheckSessionStatusApi{


  Future<Object>checkSessionStatusApi(String idRestaurants,String tableCode)async
  {


    var response=await http.get(Uri.https('${baseUrl}','/api/user/restaurants/${idRestaurants}/sessions/checkStatus/${tableCode}'),
      headers: <String,String>

      {
        'Accept-Language': 'en',
        "Access-Control-Allow-Origin":'*',
        'Authorization':"Bearer $token",
        'Accept':"application/json",
      },

    );


    if (response.statusCode==200)
    {

      return response.body;
    }
    else if (response.statusCode==422||response.statusCode==404||response.statusCode==500)
      {
        tableCode='';
    throw HandlerError(errorMessage:errorModelFromJson(response.body.toString()).message);
      }


    else{
      tableCode='';
      throw CustomError(errorMessage:errorModelFromJson(response.body).message,errorCode: response.statusCode);
    }

  }


}
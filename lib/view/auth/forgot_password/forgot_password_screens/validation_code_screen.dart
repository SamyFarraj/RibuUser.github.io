import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_otp_text_field/flutter_otp_text_field.dart';
import 'package:otp_text_field/otp_field.dart';
import 'package:otp_text_field/otp_field_style.dart';
import 'package:pin_code_fields/pin_code_fields.dart';
import 'package:ribu_app/view/auth/sign_up/sign_up_elements/email_field.dart';
import 'package:ribu_app/view/auth/sign_up/sign_up_elements/password_field.dart';
import 'package:ribu_app/view/auth/sign_up/sign_up_elements/username_field.dart';
import 'package:ribu_app/view/cart/cart_screens/cart_screeen.dart';
import 'package:ribu_app/view/global_elements/CustomComponents.dart';
import 'package:sizer/sizer.dart';

import '../../../../logic/cubits/authentication/authentication_cubit.dart';
import '../forgot_password_elemnts/your_email_field.dart';
import 'new_password_screen.dart';

class OtpValidateScreen extends StatelessWidget {
  OtpValidateScreen({super.key});

  TextEditingController email = new TextEditingController();

  final _formKey = GlobalKey<FormState>();
  late List<TextEditingController?> controls;

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return Scaffold(
      backgroundColor: theme.primaryColorLight,
      appBar: AppBar(

        leadingWidth: 9.w,
        leading: Container(              padding: EdgeInsets.only(left: 6.9.w,),

          child: GestureDetector(
            onTap: (){
              Navigator.of(context).pop();
            }
            ,
            child: Icon(Icons.arrow_back_ios,color: theme.primaryColor,),
          ),
        ),
        backgroundColor: Colors.white,
        elevation: 0,
        title: textFont14Bold("Forget Password", theme.primaryColor),
      ),
      body: Form(
        key: _formKey,
        child: BlocBuilder<AuthenticationCubit, AuthenticationState>(

          builder: (context, state) {
            var cubit = AuthenticationCubit.get(context);
            return Container(
              padding: EdgeInsets.only(top: 4.5.h, left: 6.9.w, right: 6.9.w),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [

                  textFont14Bold('Add the code', theme.primaryColor),
                  SizedBox(height: 4.h,),
                  OTPTextField(
                      length: 4,
                      width: MediaQuery
                          .of(context)
                          .size
                          .width,
                      fieldWidth: 50,
                      style: TextStyle(fontSize: 17),
                      onCompleted: (pin) {
                        print("Completed: " + pin);
                      },
                      otpFieldStyle: OtpFieldStyle(
                        borderColor: Colors.black,
                      )),

//                   OtpTextField(
//
// decoration: InputDecoration(),
//                 borderRadius: BorderRadius.circular(50),
//                     numberOfFields: 4,
//                     borderColor: Color(0xFF512DA8),
//                     focusedBorderColor: Color(0xFF512DA8),
//                     clearText: false,
//                     showFieldAsBox: true,
//                     textStyle: theme.textTheme.subtitle1,
//                     onCodeChanged: (String value) {
//                       //Handle each value
//                     },
//
//                     handleControllers: (controllers) {
//                       //get all textFields controller, if needed
//                       controls = controllers;
//                     },
//                     onSubmit: (String verificationCode) {
//                       //set clear text to clear text from all fields
//                       // setState(() {
//                       //   clearText = true;
//                       // });
//                       //navigate to different screen code goes here
//                       showDialog(
//                         context: context,
//                         builder: (context) {
//                           return AlertDialog(
//                             title: Text("Verification Code"),
//                             content: Text('Code entered is $verificationCode'),
//                           );
//                         },
//                       );
//                     }, // end onSubmit
//                   ),

                  BlocBuilder<AuthenticationCubit, AuthenticationState>(
                    builder: (context, state) {
                      if (state is AuthenticationLoadedState) {
                        return  push(context, CartScreen("",""));
                      }
                      else if (state is AuthenticationLoadingState) {
                        return circular(theme.secondaryHeaderColor);
                      }
                      else
                        return Center(
                          child:
                          Container(
                            margin: EdgeInsets.only(top: 6.h),
                            height: 5.5.h,
                            width: 85.5.w,
                            child: ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                    backgroundColor: theme.secondaryHeaderColor,
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(
                                            35))),
                                onPressed: () {
                                  push(context, NewPasswordScreen());
                                  if (_formKey.currentState!.validate()) {
                                    //        cubit.sign(userName.text, passWord.text);
                                    // ScaffoldMessenger.of(context).showSnackBar(
                                    //   // const SnackBar(
                                    //   //     content: Text('Processing Data')),
                                    //
                                    // );
                                  }
                                },
                                child: textFont14Bold('Send Code', theme
                                    .primaryColorLight)),
                          ),
                        );
                    },
                  ),
                  SizedBox(height: 2.h,),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                    textFont10('didn’t recive the code? ', theme.primaryColor),
                    textFont10Bold('Resend ', theme.primaryColor),
                  ],),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

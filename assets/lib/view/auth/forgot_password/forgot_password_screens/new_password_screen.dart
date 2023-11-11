import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'package:ribu_app/view/cart/cart_screens/cart_screeen.dart';
import 'package:ribu_app/view/global_elements/CustomComponents.dart';
import 'package:sizer/sizer.dart';

import '../../../../logic/cubits/authentication/authentication_cubit.dart';
import '../forgot_password_elemnts/new_password_field.dart';
import '../forgot_password_elemnts/your_email_field.dart';

class NewPasswordScreen extends StatelessWidget {
  NewPasswordScreen({super.key});

  TextEditingController email = new TextEditingController();

  final _formKey = GlobalKey<FormState>();

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
              padding: EdgeInsets.only(top:4.5.h,left: 6.9.w, right: 6.9.w),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [


                  PasswordField('Your New Password',email),
                  SizedBox(height: 4.h,),
                  PasswordField('Confirm Password',email),


                  BlocBuilder<AuthenticationCubit, AuthenticationState>(
                    builder: (context, state) {

                      if(state is AuthenticationLoadedState)
                      {
                        return  push(context, CartScreen("",""));

                      }
                      else if(state is AuthenticationLoadingState)
                      {
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
                                        borderRadius: BorderRadius.circular(35))),
                                onPressed: () {
                                  if (_formKey.currentState!.validate()) {
                                    //        cubit.sign(userName.text, passWord.text);
                                    // ScaffoldMessenger.of(context).showSnackBar(
                                    //   // const SnackBar(
                                    //   //     content: Text('Processing Data')),
                                    //
                                    // );
                                  }
                                },
                                child: textFont14Bold('Update Password', theme
                                    .primaryColorLight)),
                          ),
                        );
                    },
                  )
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

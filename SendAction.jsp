<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>전달받은 데이터</h1>
        <ul>
            <li>기본os: <%= request.getParameter("os") %></li>
            <li>번호: <%= request.getParameter("user_phone_number") %></li>
            <li>사전등록: <%= request.getParameter("store_choice") %></li>
        </ul>
    </body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.io.PrintWriter" %>
<%@page import="java.util.*" %>
<%@page import="javax.sql.*" %>
<%@page import="db.CMyXML" %>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="Heroes" class="Heroes.User" scope = "page"/>
<jsp:setProperty name="Heroes" property="os"/>
<jsp:setProperty name="Heroes" property="user_phone_number"/>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>SendAction</title>
</head>
<body>

<%
/*
try
{
	PrintWriter script = response.getWriter();
	script.println("<script>");
	script.println("");
	script.println("</script>");
	
	return;
}
catch(Exception e) 
{
	
	e.printStackTrace();
	
}
*/
	java.sql.Connection connection = null;


	if( Heroes.getOs() == null )
	{
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('OS를 확인 하세요')");
		script.println("history.back()");
		script.println("</script>");
		return;	
	}
	if( Heroes.getUser_phone_number() == null )
	{
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('휴대폰 번호를 확인 하세요')");
		script.println("history.back()");
		script.println("</script>");
		return;
	}
	
	String strOS = Heroes.getOs();
	String strPhone = Heroes.getUser_phone_number();
	try
	{
		CMyXML xml = new CMyXML();
		xml.load();
		
		Class.forName("net.sourceforge.jtds.jdbc.Driver");
		
		String url = xml.GetURL();
		String name = xml.GetName();
		String pass = xml.GetPass();
		
		connection = java.sql.DriverManager.getConnection( url, name, pass );
		java.sql.Statement statement = connection.createStatement();
		
		java.sql.ResultSet resultSet = statement.executeQuery( "spAddUser " + "'" + strPhone + "', '" + strOS +"'");
		

		while( resultSet.next() ) 
		{
			int nResult = resultSet.getInt("Result"); 
			if( nResult == 1  ) 
			{
				//<jsp:forward  page="Main.jsp" >
%>
			
                
<% 
			}
			else if( nResult == 0 )
			{
				//실패	
			}
			else if( nResult == -1 )
			{
				//중복
			}
		}
		
		statement.close();
		connection.close();
	}
	catch(Exception e) 
	{
		
		e.printStackTrace();
	}
%>

</body>
</html>
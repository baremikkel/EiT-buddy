module com.example.eitbuddy {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;
    requires dotenv.java;


    opens com.example.eitbuddy to javafx.fxml;
    exports com.example.eitbuddy;
}
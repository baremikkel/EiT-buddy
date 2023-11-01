module com.example.eitbuddy {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.eitbuddy to javafx.fxml;
    exports com.example.eitbuddy;
}
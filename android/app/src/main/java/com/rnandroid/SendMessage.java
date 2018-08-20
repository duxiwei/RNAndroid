package com.rnandroid;


import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


public class SendMessage extends AppCompatActivity {

    private Button btn ;
    private EditText editMsg;
    private TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_send_message);
        btn =  findViewById(R.id.btn_send);
        editMsg = findViewById(R.id.edit_msg);
        Intent intent = getIntent();
        tv = findViewById(R.id.tv_show);
        tv.setText(intent.getStringExtra("msg"));
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                MainApplication.GetReactCommPackage().reactCommModule.sendMsgToRN(editMsg.getText().toString());
                Intent intent = new Intent(SendMessage.this,NewRNLayout.class);
                startActivity(intent);
            }
        });
    }
}

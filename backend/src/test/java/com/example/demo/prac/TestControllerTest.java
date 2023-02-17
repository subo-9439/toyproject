package com.example.demo.prac;

import com.example.demo.controller.TestForm;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TestControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;

    @DisplayName("1. controller확인하기")
    @Test
    void getUserFormReturnTest() throws Exception {
        //given
        TestForm testForm = new TestForm("이메일","패스워드");
        String content = gson.toJson(testForm);
        //when
        ResultActions actions =
                mockMvc.perform(
                post("/user/")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );
        //then
        MvcResult result = actions
                .andExpect(status().isCreated())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        TestForm responseTestForm = gson.fromJson(responseBody, TestForm.class);
        assertThat(responseTestForm.getEmail()).isEqualTo(testForm.getEmail());
        assertThat(responseTestForm.getPassword()).isEqualTo(testForm.getPassword());
    }

}
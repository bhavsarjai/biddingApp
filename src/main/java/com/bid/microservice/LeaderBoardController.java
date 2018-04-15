package com.bid.microservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
public class LeaderBoardController {

	Logger log = LoggerFactory.getLogger(LeaderBoardController.class);
    private final SimpMessagingTemplate template;
    
    @Autowired
    LeaderBoardController(SimpMessagingTemplate template){
        this.template = template;
    }

	@MessageMapping("/bidding")
	@SendTo("/inMemMsgBroker/messages")
    @CrossOrigin
	public void send(BidTransaction bidTrans) throws Exception
	{
		log.error("message being sent to in-memory queue");
		this.template.convertAndSend("/inMemMsgBroker", bidTrans);
	}
}

package com.goblinstic.oneshot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * packageName : com.goblinstic.oneshot.controller
 * fileName : PageController
 * author : goodhyoju
 * date : 2022/04/11 8:50 PM
 * description :
 */

@Controller
public class PageController {

    @RequestMapping(value = { "/", "/index" }, method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView index() {
        ModelAndView view = new ModelAndView("index");
        return view;
    }
}

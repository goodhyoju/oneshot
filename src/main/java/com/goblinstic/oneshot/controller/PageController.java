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

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype1", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype1() {
        ModelAndView view = new ModelAndView("/move/movetype1");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype2", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype2() {
        ModelAndView view = new ModelAndView("/move/movetype2");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype3", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype3() {
        ModelAndView view = new ModelAndView("/move/movetype3");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype4", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype4() {
        ModelAndView view = new ModelAndView("/move/movetype4");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype1", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype1() {
        ModelAndView view = new ModelAndView("/clean/cleantype1");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype2", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype2() {
        ModelAndView view = new ModelAndView("/clean/cleantype2");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype3", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype3() {
        ModelAndView view = new ModelAndView("/clean/cleantype3");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype4", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype4() {
        ModelAndView view = new ModelAndView("/clean/cleantype4");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "reservation", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView reservation() {
        ModelAndView view = new ModelAndView("reservation");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "confirm", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView confirm() {
        ModelAndView view = new ModelAndView("confirm");
        return view;
    }
}

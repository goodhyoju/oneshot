package com.goblinstic.oneshot.controller;

import com.goblinstic.oneshot.utils.SystemUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private SystemUtils systemUtils;

    @RequestMapping(value = "error", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView error() {
        ModelAndView view = new ModelAndView("error");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","error");
        return view;
    }
    @RequestMapping(value = { "/", "/index" }, method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView index() {
        ModelAndView view = new ModelAndView("index");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","index");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype1", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype1() {
        ModelAndView view = new ModelAndView("/move/movetype1");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","movetype1");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype2", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype2() {
        ModelAndView view = new ModelAndView("/move/movetype2");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","movetype2");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype3", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype3() {
        ModelAndView view = new ModelAndView("/move/movetype3");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","movetype3");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "movetype4", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView movetype4() {
        ModelAndView view = new ModelAndView("/move/movetype4");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","movetype4");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype1", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype1() {
        ModelAndView view = new ModelAndView("/clean/cleantype1");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","cleantype1");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype2", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype2() {
        ModelAndView view = new ModelAndView("/clean/cleantype2");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","cleantype2");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype3", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype3() {
        ModelAndView view = new ModelAndView("/clean/cleantype3");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","cleantype3");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "cleantype4", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView cleantype4() {
        ModelAndView view = new ModelAndView("/clean/cleantype4");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","cleantype4");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "reservation", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView reservation() {
        ModelAndView view = new ModelAndView("/counsel/reservation");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","reservation");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "confirm", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView confirm() {
        ModelAndView view = new ModelAndView("/counsel/confirm");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","confirm");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "noti", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView noti() {
        ModelAndView view = new ModelAndView("/center/noti");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","noti");
        return view;
    }
    @RequestMapping(value = "qna", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView qna() {
        ModelAndView view = new ModelAndView("/center/qna");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","qna");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "review", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView review() {
        ModelAndView view = new ModelAndView("/center/review");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","review");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "free", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView free() {
        ModelAndView view = new ModelAndView("/center/free");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","free");
        return view;
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "admin", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView admin() {
        ModelAndView view = new ModelAndView("/center/admin");
        view.addObject("myip",systemUtils.getServerIp());
        view.addObject("page","admin");
        return view;
    }
}

package com.cn.common;


import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
/**
 * 
 * @author 胡殊林
 *
 */
@Slf4j
@Aspect
@Component
public class SysLogAspect {

      @Pointcut("execution(* com.cn.controller.*.*(..))")
	  private void logPointCut(){};
	    
	  
	    @Around("logPointCut()")
	    public Object around(ProceedingJoinPoint point) throws Throwable {
	    	HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	        String ipAddr = getRemoteHost(request);
	    	String method=request.getMethod().toString();
	        String url = request.getRequestURL().toString();
	        String reqParam = preHandle(point,request);
	    	long beginTime = System.currentTimeMillis();
            log.info("请求方式:"+method+"ip地址:"+ipAddr);
	    	log.info("请求URL:{},请求参数:{}",url,reqParam);
	    	Object result= point.proceed();	    
	        String respParam = postHandle(result);
	        log.info("请求URL:{},返回参数:{}",url,respParam);
	        //执行时长(毫秒) 
			long time = TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis() - beginTime);
			log.info("接口耗时:"+time+"秒");
	        return result;
			
	    }
	    
	    /**
	     * 入参数据
	     * @param joinPoint
	     * @param request
	     * @return
	     */
	    private String preHandle(ProceedingJoinPoint joinPoint,HttpServletRequest request) {

	        String reqParam = "";
	        Signature signature = joinPoint.getSignature();
	        MethodSignature methodSignature = (MethodSignature) signature;
	        Method targetMethod = methodSignature.getMethod();
	        Annotation[] annotations = targetMethod.getAnnotations();
	        for (Annotation annotation : annotations) {
	            //此处可以改成自定义的注解
	            if (annotation.annotationType().equals(RequestMapping.class)) {
	                reqParam = JSON.toJSONString(request.getParameterMap());
	                break;
	            }
	        }
	        return reqParam;
	    }
	    /**
	     * 返回数据
	     * @param retVal
	     * @return
	     */
	    private String postHandle(Object retVal) {
	        if(null == retVal){
	            return "";
	        }
	        return JSON.toJSONString(retVal);
	    }


	    /**
	     * 获取目标主机的ip
	     * @param request
	     * @return
	     */
	    @SuppressWarnings("unused")
		private String getRemoteHost(HttpServletRequest request) {
	        String ip = request.getHeader("x-forwarded-for");
	        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	            ip = request.getHeader("Proxy-Client-IP");
	        }
	        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	            ip = request.getHeader("WL-Proxy-Client-IP");
	        }
	        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	            ip = request.getRemoteAddr();
	        }
	        return "0:0:0:0:0:0:0:1".equals(ip) ? "127.0.0.1" : ip;
	    }

}

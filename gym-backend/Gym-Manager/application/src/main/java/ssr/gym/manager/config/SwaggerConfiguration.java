package ssr.gym.manager.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Primary;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Predicates;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
	
	 /** The Constant SPRING_HATEOAS_OBJECT_MAPPER. */
    private static final String SPRING_HATEOAS_OBJECT_MAPPER = "_halObjectMapper";

    /** The spring hateoas object mapper. */
    @Autowired
    @Qualifier(SPRING_HATEOAS_OBJECT_MAPPER)
    private ObjectMapper springHateoasObjectMapper;
	
	/**
	 * Api.
	 *
	 * @return the docket
	 */
	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select().apis(RequestHandlerSelectors.any())
                .paths(Predicates.not(PathSelectors.regex("/error"))).build();
    }
	
	 /**
 	 * Api info.
 	 *
 	 * @return the api info
 	 */
 	private ApiInfo apiInfo() {
	        return new ApiInfoBuilder().title("Gym Manager Rest Service Docs")
	                .description("Rest services for the Gym Manager Application made avaialble").version("0.1")
	                .build();
	    }
	 
	 /**
     * Object mapper.
     *
     * @return the object mapper
     */
//    @Primary
//    @Bean
//    @Order(value = Ordered.HIGHEST_PRECEDENCE)
//    @DependsOn(SPRING_HATEOAS_OBJECT_MAPPER)
//    public ObjectMapper objectMapper() {
//        return springHateoasObjectMapper;
//    }

}

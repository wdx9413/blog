package cn.blog.mapper;

import cn.blog.entity.Visitor;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface VisitorMapper {

    @Select("select id, name from visitor where email=#{visitorEmail}")
    Visitor getVisitorByEmail(String visitorEmail);

    @Insert("insert into visitor(id, name, email) values(#{id}, #{name}, #{email})")
    void insertVisitor(Visitor visitor);
}

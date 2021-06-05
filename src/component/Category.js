import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 17px;
  padding-bottom: 20px;
  margin-left: 12px;
`
const TagList = styled.div`
`
const Tag = styled.button`
  border-radius: 9999px;
  color: ${props => props.color};
  background: ${props => props.background};
  font-size : 18px;
  text-align: start;
  font-weight: 500;
  margin-top : 10px;
  margin-left : 12px;
  word-spacing : 2px
  border-radius: 9999px;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
`

function Category() {
  const [select_Tag, setTag] = useState();
  useEffect(() => {
    try {
      setTag(1);
    } catch (e) {
      console.log(e)
    }
  }, []
  )

  const onChangeTag = (e, id) => {
    e.preventDefault();
    if (id === select_Tag) {
      setTag(0);
      console.log(select_Tag);
    }
    else {
      setTag(id);
    }
  }

  return (
    <div>
      <Title>카테고리</Title>

      <TagList>
        <Tag color={select_Tag === 1 ? "white" : "black"} background={select_Tag === 1 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 1)}>&nbsp;# all</Tag>
        <Tag color={select_Tag === 2 ? "white" : "black"} background={select_Tag === 2 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 2)}>&nbsp;# to-do-list (142)</Tag>
        <Tag color={select_Tag === 3 ? "white" : "black"} background={select_Tag === 3 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 3)}>&nbsp;# html_css (130)</Tag>
        <Tag color={select_Tag === 4 ? "white" : "black"} background={select_Tag === 4 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 4)}>&nbsp;# javascript (96)</Tag>
        <Tag color={select_Tag === 5 ? "white" : "black"} background={select_Tag === 5 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 5)}>&nbsp;# bla-bla (82)</Tag>
        <Tag color={select_Tag === 6 ? "white" : "black"} background={select_Tag === 6 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 6)}>&nbsp;# side_projects (52)</Tag>
        <Tag color={select_Tag === 7 ? "white" : "black"} background={select_Tag === 7 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 7)}>&nbsp;# python (52)</Tag>
        <Tag color={select_Tag === 8 ? "white" : "black"} background={select_Tag === 8 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 8)}>&nbsp;# dev_resources (35)</Tag>
        <Tag color={select_Tag === 9 ? "white" : "black"} background={select_Tag === 9 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 9)}>&nbsp;# hello (35)</Tag>
        <Tag color={select_Tag === 10 ? "white" : "black"} background={select_Tag === 10 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 10)}>&nbsp;# jobs (24)</Tag>
        <Tag color={select_Tag === 11 ? "white" : "black"} background={select_Tag === 11 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 11)}>&nbsp;# react (14)</Tag>
        <Tag color={select_Tag === 12 ? "white" : "black"} background={select_Tag === 12 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 12)}>&nbsp;# uber_eats (11)</Tag>
        <Tag color={select_Tag === 13 ? "white" : "black"} background={select_Tag === 13 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 13)}>&nbsp;# announcement (11)</Tag>
        <Tag color={select_Tag === 14 ? "white" : "black"} background={select_Tag === 14 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 14)}>&nbsp;# type-test (10)</Tag>
        <Tag color={select_Tag === 15 ? "white" : "black"} background={select_Tag === 15 ? "#3B82F6" : "white"} onClick={(e) => onChangeTag(e, 15)}>&nbsp;# instaclone (10)</Tag>
      </TagList>

    </div>
  );
}

export default Category;
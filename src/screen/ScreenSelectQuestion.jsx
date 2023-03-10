import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { pathRoute } from "../navigator";
import { PetContext } from "../context/PetContext";
import { SelectAnswer } from "../components/Select/SelectAnswer";
import { ButtonIcon } from "../components/Buttons/ButtonIcon";
import { styleSelectQuestion } from "../theme/styleSelectQuestion";
import { useQuestion } from "../hooks/useQuestion";
import { styleResponsive } from "../theme/stylesResponsive";

export const ScreenSelectQuestion = ({ navigation, route }) => {
  const {
    petState: {
      loading,
      questions,
      nameQuestion,
      totalQuestion,
      answerQuestion,
      pointsQuestion,
    },
    getQuestion,
    setAnswerQuestion,
    setSelectPet,
  } = useContext(PetContext);

  const {
    setSelectQuestion,
    addPet,
    infoQuestion,
    isFirstQuestion,
    selectQuestionId,
    setResetData,
  } = useQuestion();

  const selectQuestion = (id) => {
    const { params } = route;
    if (selectQuestionId !== id) {
      const { img } = questions[id];
      setSelectQuestion(img, id, {
        ...questions[id],
        idfather: params.id,
        question: nameQuestion,
      });
    }
  };

  const nextQuestion = () => {
    const { params } = route;
    let questionsState = [...answerQuestion, addPet];
    setAnswerQuestion({ answer: questionsState });
    if (totalQuestion - 1 === params.id) {
      setSelectPet({ pet: params.name });
      navigation.replace(pathRoute.screenRequest);
    } else {
      let nextId = params.id + 1;
      navigation.navigate(pathRoute.screenSelectQuestion, {
        name: params.name,
        id: nextId,
      });
    }
  };

  const backQuestion = () => {
    const { params } = route;
    let questionsState = answerQuestion;
    questionsState.pop();
    setAnswerQuestion({ answer: questionsState });
    let nextId = params.id - 1;
    navigation.navigate(pathRoute.screenSelectQuestion, {
      name: params.name,
      id: nextId,
    });
  };

  const getQuestionPet = () => {
    const { params } = route;
    if (params) {
      setResetData(params.name, params.id > 0, -1, "");
      getQuestion(params);
    } else {
      navigation.navigate(pathRoute.screenSelectPets);
    }
  };

  useEffect(() => {
    getQuestionPet();
  }, [route]);

  if (loading) {
    return <View style={{ flex: 1 }} />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/backgrounds/question.png")}
          resizeMode="cover"
          style={styleSelectQuestion.imgback}
        >
          <View style={styleSelectQuestion.containerheader}>
            <Header
              backQuestion={backQuestion}
              isFirstQuestion={isFirstQuestion}
              name={infoQuestion.name}
            />
          </View>
          <View style={styleSelectQuestion.body}>
            <ImagesQuestion
              name={nameQuestion}
              img={infoQuestion.img}
              info={pointsQuestion}
            />
          </View>
          <View style={styleSelectQuestion.question}>
            <Body
              nextQuestion={nextQuestion}
              questions={questions}
              selectQuestionId={selectQuestionId}
              selectQuestion={selectQuestion}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const Header = ({
  backQuestion = () => {},
  name = "",
  isFirstQuestion = false,
}) => {
  return (
    <View style={styleSelectQuestion.header}>
      <View>
        {isFirstQuestion && (
          <ButtonIcon
            action={backQuestion}
            img={require("../../assets/iconos/flecha.png")}
          />
        )}
      </View>
      <Text style={styleSelectQuestion.textHeader}>{name}</Text>
      <View />
    </View>
  );
};

const ImagesQuestion = ({
  name = "",
  img = "",
  info = {
    text: "",
    points: [],
  },
}) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View
        style={{
          height: "25%",
          justifyContent: "center",
        }}
      >
        <Text style={styleResponsive.textBodyQuestion}>{name}</Text>
      </View>
      {info.text !== "" && (
        <View style={{ height: "30%", alignItems: "center" }}>
          <Text style={styleResponsive.textFonsizeContiainerQuestion}>{info.text}</Text>
          {info.points.map((point, index) => (
            <View key={`${index}-info`} style={{ flexDirection: "row" }}>
              <Text>
                {"\u2022"}
                {"  "}
              </Text>
              <Text style={styleResponsive.textFonsizeContiainerQuestion}>{point}</Text>
            </View>
          ))}
        </View>
      )}
      <View style={{ height: "40%", alignItems: "center" }}>
        <View style={styleResponsive.containerImageQuestion}>
          {img !== "" && (
            <Image style={styleSelectQuestion.imageBody} source={img} />
          )}
        </View>
      </View>
    </View>
  );
};

const Body = ({
  questions = [],
  nextQuestion = () => {},
  selectQuestion = () => {},
  selectQuestionId = -1,
}) => {
  return (
    <View style={styleResponsive.containerSelectQuestion}>
      {questions.map((answer, i) => {
        let style = {};
        let isSelect = false;
        if (selectQuestionId === answer.id) {
          isSelect = true;
          style = { borderWidth: 2, borderColor: "#0085CA" };
        }
        return (
          <SelectAnswer
            key={`${i}-answer`}
            action={() => {
              selectQuestion(answer.id);
            }}
            styleContainer={{
              ...style,
              ...styleResponsive.containerButtonsQuestion,
            }}
          >
            {isSelect ? (
              <Image
                style={{ width: 20, height: 20, resizeMode: "contain" }}
                source={require("../../assets/iconos/correct.png")}
              />
            ) : (
              <View />
            )}
            <Text style={{ color: isSelect ? "#0085CA" : "black" }}>
              {answer.name}
            </Text>
            <View />
          </SelectAnswer>
        );
      })}
      <ButonPrimary
        stylesButton={{
          ...styleResponsive.containerNextButtonQuestion,
          backgroundColor: selectQuestionId < 0 ? "#ccc" : "#0085CA",
        }}
        disabled={selectQuestionId < 0}
        action={nextQuestion}
      >
        Siguiente
      </ButonPrimary>
    </View>
  );
};

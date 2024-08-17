import IconButton from "@/src/components/buttons/IconButton";
import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import SwipeDot from "@/src/components/pagination/SwipeDot";
import Swiper from "@/src/components/swipe/Swiper";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import { useBrandTheme } from "@/src/theme/hooks";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
const stepOneImage = require("../../assets/images/onbording/onbording_step1.png");
const stepTwoImage = require("../../assets/images/onbording/onbording_step2.png");
const stepThreeImage = require("../../assets/images/onbording/onbording_step3.png");

type OnBoardingDataType = {
  id: number;
  image: any;
  highlightTexts: string[];
  description: string;
};
const onboardingSteps: OnBoardingDataType[] = [
  {
    id: 1,
    image: stepOneImage,
    highlightTexts: ["Connect with", "Friends and Family", "to Workout"],
    description:
      "Build relationships with workout motivation and accountability cast to your TV.",
  },
  {
    id: 2,
    image: stepTwoImage,
    highlightTexts: ["Add yours", "Favorite Workout", "Videos"],
    description:
      "Include workout videos from YouTube or cloud storage to follow along.",
  },
  {
    id: 3,
    image: stepThreeImage,
    highlightTexts: ["Monitor", "Fitness on TV Scree", "as you Workout"],
    description:
      "View your and partners performance in real-time on the TV screen.",
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useBrandTheme();
  const sliderRef: React.LegacyRef<FlatList<OnBoardingDataType>> | undefined =
    useRef(null);

  const scrollTo = (params: {
    index: number;
    animated?: boolean;
    viewOffset?: number;
    viewPosition?: number;
  }) => {
    if (sliderRef.current) sliderRef.current.scrollToIndex(params);
  };

  const nextSlide = (index: number) => {
    if (currentIndex < onboardingSteps.length - 1) {
      scrollTo({ index });
    } else {
      router.push("/onboarding/completeProfile");
    }
  };
  const prevSlide = (index: number) => {
    if (currentIndex > 0) {
      scrollTo({ index });
    }
  };
  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={[styles.onboardingStepsContainer]}>
          <Swiper
            data={onboardingSteps}
            renderItem={({ item }) => <OnboardingCard {...item} />}
            // keyExtractor={(item) => item.id}
            ref={sliderRef}
            setCurrentIndex={setCurrentIndex}
          />

          <DefaultView style={styles.swipePagingContainer}>
            <IconButton
              variant={currentIndex === 0 ? "disable" : "border"}
              onPress={() => prevSlide(currentIndex - 1)}
              disabled={currentIndex === 0}
              icon={
                <Feather
                  name="arrow-left"
                  size={24}
                  color={theme.colors.primary}
                />
              }
            />
            <SwipeDot data={onboardingSteps} activeIndex={currentIndex} />
            <IconButton
              onPress={() => nextSlide(currentIndex + 1)}
              icon={<FontAwesome6 name="arrow-right" size={24} color="#fff" />}
            />
          </DefaultView>
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

type OnboardingCardType = OnBoardingDataType;

const OnboardingCard = (props: OnboardingCardType) => {
  const { id, image, highlightTexts, description } = props;
  const text1 = highlightTexts[0];
  const text2 = highlightTexts[1];
  const text3 = highlightTexts[2];
  const { theme } = useBrandTheme();
  const { width } = useWindowDimensions();

  return (
    <DefaultView style={[styles.onboardingCardContainer, { width: width }]}>
      <DefaultImage source={image} style={[styles.imageContainer]} />
      <DefaultView style={styles.highlightTextContainer}>
        <TypoGraphy headingType="h2" style={{ textAlign: "center" }}>
          {text1}{" "}
          <TypoGraphy headingType="h2" style={{ color: theme.colors.primary }}>
            {text2}
          </TypoGraphy>{" "}
          {text3}
        </TypoGraphy>
      </DefaultView>

      <TypoGraphy headingType="bodyGray" style={{ textAlign: "center" }}>
        {description}
      </TypoGraphy>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  onboardingStepsContainer: {
    width: "100%",
    height: "auto",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
    paddingBottom: 81,
  },
  onboardingCardContainer: {
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: 340,
    height: 330,
    objectFit: "contain",
  },
  highlightTextContainer: {
    paddingTop: 81,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },

  swipePagingContainer: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 118,
    paddingBottom: 81,
    paddingHorizontal: 24,
  },
});

export default OnboardingScreen;

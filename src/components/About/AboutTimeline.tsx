import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faDesktop,
  faChild,
} from "@fortawesome/free-solid-svg-icons";

export const AboutTimeline = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fffff",
            color: "#1f1f1f",
            borderTop: "3px solid lightpink",
          }}
          contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
          date="SEP 2015 - APR 2019"
          iconStyle={{
            background: "#ffffff",
            color: "#1f1f1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{
                width: "40px",
                height: "40px",
                left: "auto",
                top: "0%",
                margin: "0px",
              }}
            />
          }
        >
          <h2 className="vertical-timeline-element-title">
            Vancouver Island University
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Full-Time Student
          </h3>
          <p style={{ fontWeight: "normal" }}>
            After four years of being a full-time student, I graduated from
            Vancouver Island University with a Bachelor of Arts Major in
            Criminology. During this time I had the opportunity to intern at
            Saanich Community Corrections.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fffff",
            color: "#1f1f1f",
            borderTop: "3px solid lightpink",
          }}
          date="MAY 2019 - JUN 2020"
          iconStyle={{
            background: "#ffffff",
            color: "#1f1f1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <FontAwesomeIcon
              icon={faChild}
              style={{
                width: "40px",
                height: "40px",
                left: "auto",
                top: "0%",
                margin: "0px",
              }}
            />
          }
        >
          <h2 className="vertical-timeline-element-title">
            Surrounded By Cedar Child & Family Services
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Intensive Youth Support Worker
          </h3>
          <p style={{ fontWeight: "normal" }}>
            After graduating from University, I decided to pursue a career in
            the Social Services field. I created individual service plans for
            Indigenous youth in care who engage in high-risk behavior that
            increased their overall wellbeing.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fffff",
            color: "#1f1f1f",
            borderTop: "3px solid lightpink",
          }}
          date="JUN 2020 - MAR 2021"
          iconStyle={{
            background: "#ffffff",
            color: "#1f1f1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <FontAwesomeIcon
              icon={faDesktop}
              style={{
                width: "40px",
                height: "40px",
                left: "auto",
                top: "0%",
                margin: "0px",
              }}
            />
          }
        >
          <h2 className="vertical-timeline-element-title">
            Built Better Technology
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Web Designer & Developer
          </h3>
          <p style={{ fontWeight: "normal" }}>
            Began a transition phase from my old career to a new career in tech.
            During this time I began designing custom websites and apps for
            clients. After a short while, I began learning some coding basics
            and had the opportunity to turn some of the designs into front-end
            production code.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fffff",
            color: "#1f1f1f",
            borderTop: "3px solid lightpink",
          }}
          date="MAR 2021 - JUN 2021"
          iconStyle={{
            background: "#ffffff",
            color: "#1f1f1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{
                width: "40px",
                height: "40px",
                left: "auto",
                top: "0%",
                margin: "0px",
              }}
            />
          }
        >
          <h2 className="vertical-timeline-element-title">Lighthouse Labs</h2>
          <h3 className="vertical-timeline-element-subtitle">
            Web Development Bootcamp
          </h3>
          <p style={{ fontWeight: "normal" }}>
            Graduated with a Diploma in Web Development that enabled me to
            transform my hobby into a reality. While in bootcamp, I learned how
            to build software from the ground up using popular languages,
            frameworks, and best practices. During this time, I had the
            opportunity to create 2 full-stack apps as part of midterms and
            finals.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

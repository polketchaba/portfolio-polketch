import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";

function Bildung() {
  return (
    <div className="bildung">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10/2020 - Jetzt"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Frankfurt University of Applied Sciences, Frankfurt (Deutschland)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelorstudium
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="04/2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
         <h3 className="vertical-timeline-element-title">
          Frankfurt University of Applied Sciences, Frankfurt (Deutschland)
          </h3>

          <p> Bachelorstudium Elektrotechnik</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10/2019 - 03/2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Frankfurt University of Applied Sciences, Frankfurt (Deutschland)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Deutschsprachkurse
          </h4>

          <p> Deutschsprachstufe (C1)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Deutschsprachkurse
          </h3>

          <p> Deutschsprachstufe (A1-C1) </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Bildung;

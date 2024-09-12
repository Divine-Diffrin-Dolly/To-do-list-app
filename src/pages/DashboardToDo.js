import React, { useEffect } from "react";
import "./DashboardToDo.css";
import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards/es-modules/masters/dashboards.src";
import "@highcharts/dashboards/es-modules/masters/modules/layout.src";
import { useLocation } from "react-router-dom";

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);

export default function DashboardToDo() {
  const { state } = useLocation();
  const completedTaskCount = state?.param1.completedTaskCount;
  const incompletedTaskCount = state?.param1.incompletedTaskCount;
  const config = {
    gui: {
      layouts: [
        {
          rows: [
            {
              cells: [
                {
                  id: "kpi-wrapper",
                  layout: {
                    rows: [
                      {
                        cells: [
                          {
                            id: "dashboard-col-0",
                          },
                          {
                            id: "dashboard-col-1",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    components: [
      {
        type: "KPI",
        cell: "dashboard-col-0",
        value: completedTaskCount,
        title: "Completed Tasks",
      },
      {
        type: "KPI",
        cell: "dashboard-col-1",
        value: incompletedTaskCount,
        title: "Incompleted Tasks",
      },
    ],
  };

  useEffect(() => {
    Dashboards.board("container", config);
  }, []);

  return <div id="container" />;
}

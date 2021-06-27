export const optionsConfig = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  animation: {
    duration: 2000,
  },
  // maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      // type: "linear",
      // tooltipFormat:'MM/DD/YYYY',
      // ticks: {
      //   callback(v) {
      //     return new Date(v).toLocaleString();
      //   }
      // }
      display: true,
      type: "time",
      time: {
        parser: "MM/DD/YYYY HH:mm",
        tooltipFormat: "ll HH:mm",
        unit: "day",
        unitStepSize: 1,
        displayFormats: {
          day: "MM/DD/YYYY",
        },
      },
    },

    y: {
      title: {
        display: true,
        text: "value",
      },
    },
  },
  parsing: {
    xAxisKey: "t",
    yAxisKey: "y",
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  // plugins: {
  //   tooltip: {
  //     x: {
  //       callback(v) {
  //         return new Date(v).toLocaleString();

  //       }
  //     }
  //   }
  // }
};

export const optionsConfigHours = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  animation: {
    duration: 2000,
  },
  responsive: true,
  scales: {
    x: {
      display: true,
      type: "time",
      time: {
        parser: "MM/DD/YYYY HH:mm",
        tooltipFormat: "ll HH:mm",
        unit: "hour",
        unitStepSize: 1,
        displayFormats: {
          day: "MM/DD/YYYY HH:mm",
        },
      },
    },

    y: {
      title: {
        display: true,
        text: "value",
      },
    },
  },
  parsing: {
    xAxisKey: "t",
    yAxisKey: "y",
  },
};

export const dataConfig = (detail, data) => {
  return {
    datasets: [
      {
        label: `${detail ? detail.symbol : ""} price`.toUpperCase(),
        data: data,
        backgroundColor: "rgba(174, 305, 194, 0.2)",
        borderColor: "rgba(121,198,123,0.8)",
        pointRadius: 0,
        fill: true,
      },
    ],
  };
};

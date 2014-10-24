/// <reference path="../_references.d.ts" />
var nvd3 = require("angular-nvd3");

var PieController = (function () {
    function PieController() {
        var _this = this;
        this.events = this.createRandomEvents();

        this.dueDateChartConfig = {
            chart: {
                type: 'pieChart',
                height: '250',
                width: '300',
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                pie: {
                    startAngle: function (d) {
                        return d.startAngle - Math.PI;
                    },
                    endAngle: function (d) {
                        return d.endAngle - Math.PI;
                    },
                    color: function (d, i) {
                        return _this.getColour(i);
                    }
                },
                transitionDuration: 200,
                legend: {
                    margin: {
                        top: 0,
                        right: 140,
                        bottom: 0,
                        left: 0
                    },
                    align: false,
                    rightAlign: false,
                    color: function (d, i) {
                        return _this.getColour(i);
                    }
                },
                noData: "No upcoming actions",
                showLabels: false,
                tooltipContent: function (key, y, e, graph) {
                    return key;
                }
            }
        };

        this.dueDateChart = [
            { "key": "England", y: 100 },
            { "key": "Scotland", y: 35 },
            { "key": "Wales", y: 121 },
            { "key": "Ireland", y: 93 }
        ];

        console.log("Created " + JSON.stringify(this.events));
    }
    PieController.prototype.getColour = function (i) {
        switch (i) {
            case 0:
                return 'red';
            case 1:
                return 'orange';
            case 2:
                return 'green';
        }
        return "blue";
    };

    PieController.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 20; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    id: i,
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    id: i,
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    PieController.$inject = [];
    return PieController;
})();

module.exports = PieController;
//# sourceMappingURL=pie-controller.js.map

/// <reference path="../_references.d.ts" />

class PieController {

    public static $inject = [];

    constructor() {
        this.events = this.createRandomEvents();

        this.dueDateChartConfig = {
            chart: {
                type: 'pieChart',
                height: '250',
                width: '300',
                donut: true,
                x: (d) => d.key,
                y: (d) => d.y,
                pie: {
                    startAngle: (d) => { return d.startAngle - Math.PI },
                    endAngle: (d) => { return d.endAngle - Math.PI },
                    color: (d, i) => this.getColour(i)
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
                    color: (d, i) => this.getColour(i)
                },
                noData: "No upcoming actions",
                showLabels: false,                
                tooltipContent: (key, y, e, graph) => key
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
    
    public events: Array<any>;
    public dueDateChart: any;
    public dueDateChartConfig: any;
    
    private getColour(i) {
        switch(i) {
            case 0: return 'red';
            case 1: return 'orange';
            case 2: return 'green';
        }
        return "blue";
    }

    private createRandomEvents(): Array<any> {
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
    }
}

export = PieController;
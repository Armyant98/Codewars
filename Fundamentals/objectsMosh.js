function StopWatch() {
    let duration = 0
    let startTime = 0
    let endTime = 0;
    let started = false;
    
    this.start = function() {
            if (started){
                throw new Error('stopwatch started')
            }
            started = true;
            startTime = new Date();
        };
    this.stop = function() {
        if (!started){
            throw new Error ('Stopwatch never started')
        }
        started = false;
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }
    
    this.reset = function() {
        duration = 0
        startTime = 0
        endTime = 0;
        started = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration }
    })

}

let sw = new StopWatch()
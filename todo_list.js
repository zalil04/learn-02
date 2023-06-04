async fetchData () {
        return await fetch('tasks.json')
                    .then(function(response) {
                        return response.json();
                    }).then(function(tasks) {
                        return tasks;
                    })          
    }
    async componentDidMount() {
        let tasks = await this.fetchData()
        let result = []
        Object.keys(tasks).map(function(objectKey, index) {
            var value = tasks[objectKey];
            result.push(value)
        });
        
        this.setState({items: result})
        
    }

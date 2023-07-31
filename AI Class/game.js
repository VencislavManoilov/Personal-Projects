

class AI {
    constructor(customWeights, numInputs, numLayers, numNeurons, numOutputs) {
        this.weights = [];

        if(customWeights != null) {
            this.weights = customWeights;
        } else {
            for(let i = 0; i < numLayers + 2; i++) {
                this.weights[i] = [];
                let howManyNeurons = numNeurons;
                if(i == 0) {
                    howManyNeurons = numInputs;
                } else if(i == numLayers + 1) {
                    howManyNeurons = numOutputs;
                }

                if(i < numLayers + 1) {
                    for(let j = 0; j < howManyNeurons; j++) {
                        this.weights[i][j] = [];
                    }

                    for(let j = 0; j < this.weights[i].length; j++) {
                        let numWeights = numNeurons;
                        if(i == numLayers + 1) {
                            numWeights = numOutputs;
                        }

                        for(let k = 0; k < numWeights; k++) {
                            this.weights[i][j][k] = randomInteger(-100, 101) / 100;
                            // this.weights[i][j][k] = randomInteger(1, 3);
                        }
                    }
                }
            }

            for(let i = 0; i < numOutputs; i++) {
                this.weights[this.weights.length - 1][i] = 0;
            }
        }
    }

    Play(inputs) {
        if(inputs.length != this.weights[0].length) {
            return "You are an idiot";
        }

        let network = [];

        network[0] = inputs;

        for(let i = 1; i < this.weights.length; i++) {
            network[i] = [];
            for(let j = 0; j < this.weights[i].length; j++) {
                network[i][j] = 0;
                for(let k = 0; k < this.weights[i - 1].length; k++) {
                    network[i][j] += network[i - 1][k] * this.weights[i - 1][k][j];
                }
            }
        }

        return network[this.weights.length - 1];
    }
}

function update() {

}

function draw() {

}
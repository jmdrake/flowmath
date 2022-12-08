const SessionLog = {
    type : "object",
    properties: {
        assessment : "string",
        assessmentscript : "string",
        answers: {
            type: "array",
            default: []
        },
        answerkey: {
            type: "array",
            default: []
        },
        correct: {
            type: "number",
            default: 0
        },
        incorrect: {
            type: "number",
            default: 0
        },
        problems: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    prompt: "string",
                    steps: "array",
                    default: []
                }
            }
        }
    }
}

const remoteStorage = new RemoteStorage({changeEvents: { local: true, window: true, remote: true, conflicts: true }});
remoteStorage.access.claim('mathlogs', 'rw');     
const client = remoteStorage.scope('/mathlogs/');

client.declareType("SessionLog", SessionLog);
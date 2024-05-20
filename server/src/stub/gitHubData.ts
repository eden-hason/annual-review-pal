const Chance = require('chance');
const chance = new Chance();

export const randomCommit = (name, ticket) => {
    const date  = new Date();
   return {
        "sha": chance.hash(),
        "commit": {
            "author": {
                "name": name,
                "email": `${name}@tipalti.com`,
                "date": chance.date({year: date.getFullYear()}),
            },
            "committer": {
                "name": name,
                "email": `${name}@tipalti.com`,
                "date": chance.date({year: date.getFullYear()}),
            },
            "message": `${ticket} ${chance.sentence({ words: 5 })}`,
        },
        "html_url": `https://github.com/owner/repo/commit/${chance.hash()}`,
        "files": [
        {
            "filename": `${chance.word()}.js`,
            "additions": chance.integer({ min: 2, max: 20 }),
            "deletions": chance.integer({ min: 0, max: 5 }),
            "changes": chance.integer({ min: 2, max: 12 }),
            "status": "modified",
            "raw_url": `https://github.com/owner/repo/raw/${chance.hash()}/${chance.word()}.js`
        },
        {
            "filename": `${chance.word()}.js`,
            "additions": chance.integer({ min: 10, max: 50 }),
            "deletions": 0,
            "changes": 0,
            "status": "added",
            "raw_url": `https://github.com/owner/repo/raw/${chance.hash()}/${chance.word()}.js`
        }
    ]
    }
}

export const randomCommits = (name, ticket) => {
    const commits = [];
    for (let i = 0; i < chance.integer({ min: 50, max: 80 }); i++) {
        commits.push(randomCommit(name, ticket));
    }
    return commits;
}

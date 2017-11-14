const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');

exports.doPheno = function (mutantList, stopList) {
  if (mutantList.deletion.length !== 0)
    return pEnum.FRAMEPHENOTYPE.DELETED;
  var frameInfo = this.getFrames(pEnum.FRAMECALLER.TRUTH, mutantList.shifts, stopList);
  // TODO: decode ilk (returns type of object)
  if (typeof frameInfo === 'string')
    return frameInfo;
  var lastFrame = frameInfo.frameList[frameInfo.frameList.length - 1];
  let endFrame = lastFrame[0];
  switch (endFrame) {
    case 1:
      return pEnum.FRAMEPHENOTYPE.FRAMESHIFTED;
    case -1:
      return pEnum.FRAMEPHENOTYPE.FRAMESHIFTED;
    case -100:
      return pEnum.FRAMEPHENOTYPE.STOPPED;
    default:
      return pEnum.FRAMEPHENOTYPE.ALLTRANSLATED;
  } // end switch
} // end doPheno

exports.getFrames = function (whoSays, mutantList, stopList) {
  var intStopList = [];
  if (whoSays === pEnum.FRAMECALLER.TRUTH) {
    intStopList = stopList;
  } else {
    for (let i = 0; i < stopList.length; i++) {
      let rStop = stopList[i];
      intStopList.push([
        (rStop.kind === pEnum.MUTEKIND.PLUSONE ? 1 : -1),
        rStop.location
      ]);
    } // end for i
  } // end stopList
  if (whoSays === pEnum.FRAMECALLER.USER) {
    // TODO: function expand
    mutantList = expand(mutantList);
  }

  // sort mutant list
  mutantList.sort(util.locSort);

  var readFrame = 0;
  var totalFramage = [];
  var currentFrameInfo = [0, 1];
  for (let j = 0; j < mutantList.length; j++) {
    let baseElement = mutantList[j];
    let lookSpot = baseElement.location;
    currentFrameInfo.push(lookSpot - 1) // mark end of old frame
    totalFramage.push(currentFrameInfo) // add frame region to new info
    if (baseElement.kind === pEnum.MUTEKIND.PLUSONE)
      readFrame++;
    else if (baseElement.kind === pEnum.MUTEKIND.MINUSONE)
      readFrame--;
    // adjust so everything is 0 or +/- 1 frame
    switch (readFrame) {
      case 2:
        readFrame = -1;
        break;
      case -2:
        readFrame = 1;
        break;
      case 3:
        readFrame = 0;
    } // end switch
    // start a new register reflecting current frame
    currentFrameInfo = [readFrame, lookSpot];
  } // end for j
  currentFrameInfo.push(scenConfig.geneLength);

  totalFramage.push(currentFrameInfo);
  var stoppedFramage = [];
  var stopped = false;
  for (let k = 0; k < totalFramage.length; k++) {
    // determine if any stops
    let readElement = totalFramage[k];
    if (readElement[0] !== 0) {
      // not in frame
      for (let e = 0; e < intStopList.length; e++) {
        let stopElement = intStopList[e];
        if (readElement[0] === stopElement[0]) {
          if (readElement[1] <= stopElement[1] && readElement[2] >= stopElement[1]) {
            if (whoSays === pEnum.FRAMECALLER.TRUTH)
              return pEnum.FRAMEPHENOTYPE.STOPPED;
            else {
              stoppedFramage.push([
                readElement[0],
                readElement[1],
                stopElement[1]
              ]);
              stoppedFramage.push([
                -100, stopElement[1], scenConfig.geneLength
              ]);
              stopped = true;
            }
          }
        } // readElement[0] == stopElement[0]
        if (stopped)
          break;
      } // end e
    }
    if (!stopped)
      stoppedFramage.push(readElement); // no stops detected, add unchanged
    else
      break;
  } // end for k
  return {
    frame: readFrame,
    frameList: stoppedFramage
  };
} // end getFrames

exports.getAlleleLoc = function (kind, allele, guesses) {
  var plusGuesses = guesses.plusGuesses;
  var minusGuesses = guesses.minusGuesses;
  if (kind === pEnum.MUTEKIND.PLUSONE) {
    for (let pElmt in plusGuesses) {
      if (pElmt[0] === allele)
        return pElmt[1];
    }
  } else if (kind === pEnum.MUTEKIND.MINUSONE) {
    for (let mElmt in minusGuesses) {
      if (mElmt[0] === allele)
        return mElmt[1];
    }
  } // end if kind
} // end getAlleleLoc

exports.updateAllele = function (kind, allele, location, guesses) {
  var plusGuesses = clone(guesses.plusGuesses);
  var minusGuesses = clone(guesses.minusGuesses);
  var foundIt = false;
  if (kind === pEnum.MUTEKIND.PLUSONE) {
    for (let pElmt in plusGuesses) {
      if (pElmt[0] === allele) {
        pElmt[1] = location;
        foundIt = true;
        break;
      }
    }
    if (!foundIt) {
      plusGuesses.push([allele, location]);
    }
  } else if (kind === plusGuesses.MUTEKIND.MINUSONE) {
    for (let mElmt in minusGuesses) {
      if (mElmt[0] === allele) {
        mElmt[1] = location;
        foundIt = true;
        break;
      }
    }
    if (!foundIt) {
      minusGuesses.push([allele, location]);
    }
  } // end if kind
  return {
    plusGuesses: plusGuesses,
    minusGuesses: minusGuesses
  }
} // end updateAllele

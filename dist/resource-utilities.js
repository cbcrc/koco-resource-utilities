'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This is for legacy (aka gthml) stuff, get rid of me plz!

var resourceUtilities = {}; // Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

resourceUtilities.resourceTypes = {
    unspecified: 'Unspecified',
    video: 'Video',
    audio: 'Audio',
    liveVideo: 'LiveVideo',
    link: 'Link',
    dossier: 'Dossier',
    liveAudio: 'LiveAudio',
    track: 'Track',
    webradio: 'Webradio'
};

var mediaResourceTypes = [resourceUtilities.resourceTypes.video, resourceUtilities.resourceTypes.audio, resourceUtilities.resourceTypes.liveVideo, resourceUtilities.resourceTypes.liveAudio, resourceUtilities.resourceTypes.track, resourceUtilities.resourceTypes.webradio];

var liveMediaResourceTypes = [resourceUtilities.resourceTypes.liveVideo, resourceUtilities.resourceTypes.liveAudio];

var audioMediaResourceTypes = [resourceUtilities.resourceTypes.audio, resourceUtilities.resourceTypes.liveAudio, resourceUtilities.resourceTypes.track, resourceUtilities.resourceTypes.webradio];

resourceUtilities.isMedia = function (resourceType) {
    return _lodash2.default.includes(mediaResourceTypes, resourceType);
};

resourceUtilities.isAudioMedia = function (resourceType) {
    return _lodash2.default.includes(audioMediaResourceTypes, resourceType);
};

resourceUtilities.isLiveMedia = function (resourceType) {
    return _lodash2.default.includes(liveMediaResourceTypes, resourceType);
};

exports.default = resourceUtilities;
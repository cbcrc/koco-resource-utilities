// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['lodash'],
    function(_) {
        'use strict';

        //This is for legacy (aka gthml) stuff, get rid of me plz!

        var resourceUtilities = {};

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

        var mediaResourceTypes = [
            resourceUtilities.resourceTypes.video,
            resourceUtilities.resourceTypes.audio,
            resourceUtilities.resourceTypes.liveVideo,
            resourceUtilities.resourceTypes.liveAudio,
            resourceUtilities.resourceTypes.track
        ];

        var liveMediaResourceTypes = [
            resourceUtilities.resourceTypes.liveVideo,
            resourceUtilities.resourceTypes.liveAudio
        ];

        var audioMediaResourceTypes = [
            resourceUtilities.resourceTypes.audio,
            resourceUtilities.resourceTypes.liveAudio,
            resourceUtilities.resourceTypes.track
        ];

        resourceUtilities.isMedia = function(resourceType) {
            return _.contains(mediaResourceTypes, resourceType);
        };

        resourceUtilities.isAudioMedia = function(resourceType) {
            return _.contains(audioMediaResourceTypes, resourceType);
        };

        resourceUtilities.isLiveMedia = function(resourceType) {
            return _.contains(liveMediaResourceTypes, resourceType);
        };

        return resourceUtilities;
    });

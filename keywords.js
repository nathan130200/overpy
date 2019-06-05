"use strict";

//List of workshop "keywords" (conditions, values, actions).
//Each keyword set is an array containing arrays containing 2 arrays.
//The first array is the OverPy keywords, the second array is the Workshop keywords.
//The keywords are sorted by the english workshop keyword (with the exception of the event keywords).
//Note: each workshop keyword MUST be with no spaces!

//OverPy keywords beginning with "_" aren't actually keywords; they signal to the parser that it isn't a simple keyword replacement.
//For example, the "set global variable(var, value)" is replaced by "var = value".

var ruleKw = [
[["@Rule"], [
	"rule",
]],
[["@Event"], [
	"event",
]],
[["_conditions"], [
	"conditions",
]],
[["_actions"], [
	"actions",
]],
];

//Event keywords
var eventKw = [

//The "event" keyword itself
[["global"], [
	"ongoing-global",
]],
[["eachPlayer"], [
	"ongoing-eachplayer",
]],
[["playerTookDamage"], [
	"playerTookDamage",
]],
[["playerDealtDamage"], [
	"playerDealtDamage",
]],
[["playerDealtFinalBlow"], [
	"playerDealtFinalBlow",
]],
[["playerDied"], [
	"playerDied",
]],
[["playerEarnedElimination"], [
	"playerEarnedElimination",
]],
//Team All
[["all"], [
	"all",
]],
//Team 1
[["1"], [
	"team1",
]],
//Team 2
[["2"], [
	"team2",
]],
//Slots
[["slot0"], [
    "slot0",
]],
[["slot1"], [
    "slot1",
]],
[["slot2"], [
    "slot2",
]],
[["slot3"], [
    "slot3",
]],
[["slot4"], [
    "slot4",
]],
[["slot5"], [
    "slot5",
]],
[["slot6"], [
    "slot6",
]],
[["slot7"], [
    "slot7",
]],
[["slot8"], [
    "slot8",
]],
[["slot9"], [
    "slot9",
]],
[["slot10"], [
    "slot10",
]],
[["slot11"], [
    "slot11",
]],

];

//Action keywords. An action is defined as a function that does not return a value.
var actionKw = [

[["return"], [
	"abort",
]],
[["_abortIf"], [
	"abortIf",
]],
[["_&allowButton"], [
	"allowButton",
]],
[["_&applyImpulse"], [
	"applyImpulse",
]],
[["bigMessage"], [
	"bigMessage",
]],
[["_chaseGlobalVariableAtRate"], [
	"chaseGlobalVariableAtRate",
]],
[["_chaseGlobalVariableOverTime"], [
	"chaseGlobalVariableOverTime",
]],
[["_chasePlayerVariableAtRate"], [
	"chasePlayerVariableAtRate",
]],
[["_chasePlayerVariableOverTime"], [
	"chasePlayerVariableOverTime",
]],
[["_&clearStatusEffect"], [
	"clearStatus",
]],
[["_&communicate"], [
	"communicate",
]],
[["createEffect"], [
	"createEffect",
]],
[["createIcon"], [
	"createIcon",
]],
[["createInWorldText"], [
	"createIn-WorldText",
]],
[["hudText"], [
	"createHudText",
]],
[["damage"], [
	"damage",
]],
[["declareTeamVictory"], [
	"declareTeamVictory",
]],
[["declarePlayerVictory"], [
	"declarePlayerVictory",
]],
[["destroyAllEffects()"], [
	"destroyAllEffects",
]],
[["destroyAllHudTexts()"], [
	"destroyAllHudText",
]],
[["destroyAllIcons()"], [
	"destroyAllIcons",
]],
[["destroyEffect"], [
	"destroyEffect",
]],
[["destroyHudText"], [
	"destroyHudText",
]],
[["destroyInWorldText"], [
	"destroyIn-WorldText",
]],
[["disableGamemodeCompletion()"], [
	"disableBuilt-inGamemodeCompletion",
]],
[["_&disableRespawn"], [
	"disableBuilt-inGamemodeRespawning",
]],
[["_&disableDeathSpectateAllPlayers"], [
	"disableDeathSpectateAllPlayers",
]],
[["_&disableDeathSpectateTargetHud"], [
	"disableDeathSpectateTargetHud",
]],
[["_&disallowButton"], [
	"disallowButton",
]],
[["enableGamemodeCompletion()"], [
	"enableBuilt-inGamemodeCompletion",
]],
[["_&enableRespawn"], [
	"enableBuilt-inGamemodeRespawning",
]],
[["goToAssembleHeroes()"], [
	"goToAssembleHeroes",
]],
[["heal"], [
	"heal",
]],
[["kill"], [
	"kill",
]],
[["_loop"], [
	"loop",
]],
[["_loopIf"], [
	"loopIf",
]],
[["_loopIfConditionIsFalse"], [
	"loopIfConditionIsFalse",
]],
[["_loopIfConditionIsTrue"], [
	"loopIfConditionIsTrue",
]],
[["_modifyGlobalVar"], [
	"modifyGlobalVariable",
]],
[["_&addToScore"], [
	"modifyPlayerScore",
]],
[["_modifyPlayerVar"], [
	"modifyPlayerVariable",
]],
[["pauseMatchTime()"], [
	"pauseMatchTime",
]],
[["playEffect"], [
	"playEffect",
]],
[["_&forceButtonPress"], [
	"pressButton",
]],
[["_&resetHeroAvailability"], [
	"resetPlayerHeroAvailability",
]],
[["_&respawn"], [
	"respawn",
]],
[["_&resurrect"], [
	"resurrect",
]],
[["_&setAbility1Enabled"], [
	"setAbility1Enabled",
]],
[["_&setAbility2Enabled"], [
	"setAbility2Enabled",
]],
[["_&setAimSpeed"], [
	"setAimSpeed",
]],
[["_&setCamera"], [
	"startCamera",
]],
[["_&setDamageDealt"], [
	"setDamageDealt",
]],
[["_&setFacing"], [
	"setFacing",
]],
[["_setGlobalVar"], [
	"setGlobalVariable",
]],
[["_&setGravity"], [
	"setGravity",
]],
[["_&setHealingDealt"], [
	"setHealingDealt",
]],
[["setMatchTime"], [
	"setMatchTime",
]],
[["_&setMaxHealth"], [
	"setMaxHealth",
]],
[["_&setMoveSpeed"], [
	"setMoveSpeed",
]],
[["_setPlayerVar"], [
	"setPlayerVariable",
]],
[["_setPlayerVarAtIndex"], [
	"setPlayerVariableAtIndex",
]],
[["_&setPrimaryFireEnabled"], [
	"setPrimaryFireEnabled",
]],
[["_&setProjectileGravity"], [
	"setProjectileGravity",
]],
[["_&setProjectileSpeed"], [
	"setProjectileSpeed",
]],
[["_&setSecondaryFireEnabled"], [
	"setSecondaryFireEnabled",
]],
[["setSlowMotion"], [
	"setSlowMotion",
]],
[["_&setStatusEffect"], [
	"setStatus",
]],
[["_&setUltCharge"], [
	"setUltimateCharge",
]],
[["_&setUltEnabled"], [
	"setUltimateAbilityEnabled",
]],
[["_skip"], [
	"skip",
]],
[["_skipIf"], [
	"skipIf",
]],
[["smallMessage"], [
	"smallMessage",
]],
[["_&startAcceleration"], [
	"startAccelerating",
]],
[["startDamageModification"], [
	"startDamageModification",
]],
[["_&startDoT"], [
	"startDamageOverTime",
]],
[["_&startForcingHero"], [
	"startForcingPlayerToBeHero",
]],
[["_&startForcingButton"], [
	"startHoldingButton",
]],
[["_&stopAcceleration"], [
	"stopAccelerating",
]],
[["stopAllDamageModifications"], [
	"stopAllDamageModifications",
]],
[["_&stopAllDoT"], [
	"stopAllDamageOverTime",
]],
[["_&stopAllHoT"], [
	"stopAllHealOverTime",
]],
[["_&stopCamera"], [
	"stopCamera",
]],
[["_stopChasingPlayerVariable"], [
	"stopChasingPlayerVariable",
]],
[["_&stopForcingCurrentHero"], [
	"stopForcingPlayerToBeHero",
]],
[["_&stopForcingButton"], [
	"stopHoldingButton",
]],
[["_&teleportTo"], [
	"teleport",
]],
[["unpauseMatchTime()"], [
	"unpauseMatchTime",
]],
[["_wait"], [
	"wait",
]],

];

//A value function is defined as a function that returns a value.
var valueFuncKw = [

[["abs"], [
	"absoluteValue",
]],
[["_add"], [
	"add",
]],
[["_and"], [
	"and",
]],
[["angleDifference"], [
	"angleDifference",
]],
[["attacker"], [
	"attacker",
]],
[["getAllDeadPlayers"], [
	"allDeadPlayers",
]],
[["getAllLivingPlayers"], [
	"allLivingPlayers",
]],
[["getAllPlayers"], [
	"allPlayers",
]],
[["_arrayContains"], [
	"arrayContains",
]],
[["_arraySlice"], [
	"arraySlice",
]],
[["_compare"], [
	"compare",
]],
[["cos"], [
	"cosineFromRadians",
]],
[["cosDeg"], [
	"cosineFromDegrees",
]],
[["len"], [
	"countOf",
]],
[["_currentArrayElement"], [
	"currentArrayElement",
]],
[["directionTowards"], [
	"directionTowards",
]],
[["distance"], [
	"distanceBetween",
]],
[["_divide"], [
	"divide",
]],
[["dotProduct"], [
	"dotProduct",
]],
[["Vector.DOWN"], [
	"down",
]],
[["_emptyArray"], [
	"emptyArray",
]],
[["eventDamage"], [
	"eventDamage",
]],
[["eventPlayer"], [
	"eventPlayer",
]],
[["_&getEyePosition"], [
	"eyePosition",
]],
[["_&getFacingDirection"], [
	"facingDirectionOf",
]],
[["_filteredArray"], [
	"filteredArray",
]],
[["_globalVar"], [
	"globalVariable",
]],
[["_&hasSpawned"], [
	"hasSpawned",
]],
[["_&hasStatusEffect"], [
	"hasStatus",
]],
[["_&getHealth"], [
	"health",
]],
[["_hero"], [
	"hero",
]],
[["heroIcon"], [
	"heroIconString",
]],
[["_&getCurrentHero"], [
	"heroOf",
]],
[["horizontalAngleFromDirection"], [
	"horizontalAngleFromDirection",
]],
[["horizontalAngleTowards"], [
	"horizontalAngleTowards",
]],
[["_&getHorizontalFacingAngle"], [
	"HorizontalFacingAngleOf",
]],
[["_&getHorizontalSpeed"], [
	"horizontalSpeedOf",
]],
[["_&isAlive"], [
	"isAlive",
]],
[["isAssemblingHeroes()"], [
	"isAssemblingHeroes",
]],
[["_&isCommunicating"], [
	"isCommunicating",
]],
[["_&isCrouching"], [
	"isCrouching",
]],
[["_&isFiringPrimaryFire"], [
	"isFiringPrimary",
]],
[["_&isFiringSecondaryFire"], [
	"isFiringSecondary",
]],
[["_&isHoldingButton"], [
	"isButtonHeld",
]],
[["_&isInAir"], [
	"isInAir",
]],
[["_isInLineOfSight"], [
	"isInLineOfSight",
]],
[["_&isInViewAngle"], [
	"isInViewAngle",
]],
[["_&isOnGround"], [
	"isOnGround",
]],
[["_&isUsingAbility1"], [
	"isUsingAbility1",
]],
[["_&isUsingAbility2"], [
	"isUsingAbility2",
]],
[["isGameInProgress()"], [
	"isGameInProgress",
]],
[["_isTrueForAny"], [
	"isTrueForAny",
]],
[["getLastCreatedEntity()"], [
	"lastCreatedEntity",
]],
[["getLastDoT()"], [
	"lastDamageOverTimeId",
]],
[["getLastCreatedText()"], [
	"lastTextId",
]],
[["_lastOf"], [
	"lastOf",
]],
[["Vector.LEFT"], [
	"left",
]],
[["getMatchTime()"], [
	"matchTime",
]],
[["max"], [
	"max",
]],
[["_&getMaxHealth"], [
	"maxHealth",
]],
[["min"], [
	"min",
]],
[["_multiply"], [
	"multiply",
]],
[["nearestWalkablePosition"], [
	"nearestWalkablePosition",
]],
[["normalize"], [
	"normalize",
]],
[["not "], [
	"not",
]],
[["getNumberOfDeadPlayers"], [
	"numberOfDeadPlayers",
]],
[["getNumberOfLivingPlayers"], [
	"numberOfLivingPlayers",
]],
[["getNumberOfPlayers"], [
	"numberOfPlayers",
]],
[["getOppositeTeam"], [
	"oppositeTeamOf",
]],
[["_or"], [
	"or",
]],
[["_playerVar"], [
	"playerVariable",
]],
[["getPlayersInRadius"], [
	"playersWithinRadius",
]],
[["_&getPosition"], [
	"positionOf",
]],
[["_raiseToPower"], [
	"raiseToPower",
]],
[["random.randint"], [
	"randomInteger",
]],
[["random.shuffle"], [
	"randomizedArray",
]],
[["random.uniform"], [
	"randomReal",
]],
[["random.choice"], [
	"randomValueInArray",
]],
[["_raycastHitPosition"], [
	"raycastHitPosition",
]],
[["Vector.RIGHT"], [
	"right",
]],
[["round"], [
	"roundToInteger",
]],
[["_&getScore"], [
	"scoreOf",
]],
[["sinDeg"], [
	"sineFromDegrees",
]],
[["_sortedArray"], [
	"sortedArray",
]],
[["sqrt"], [
	"squareRoot",
]],
[["_string"], [
	"string",
]],
[["_subtract"], [
	"subtract",
]],
[["_&getTeam"], [
	"teamOf",
]],
[["Vector.UP"], [
	"up",
]],
[["_valueInArray"], [
	"valueInArray",
]],
[["vectorTowards"], [
	"vectorTowards",
]],
[["vect"], [
	"vector",
]],
[["_&getVelocity"], [
	"velocityOf",
]],
[["verticalAngleTowards"], [
	"verticalAngleTowards",
]],
[["_&getVerticalFacingAngle"], [
	"verticalFacingAngleOf",
]],
[["victim"], [
	"victim",
]],
[["worldVector"], [
	"worldVectorOf",
]],
[["_xComponentOf"], [
	"xComponentOf",
]],
[["_yComponentOf"], [
	"yComponentOf",
]],
[["_zComponentOf"], [
	"zComponentOf",
]],

];

var heroKw = [

[["Hero.ANA"], [
    "ana",
]],
[["Hero.ASHE"], [
    "ashe",
]],
[["Hero.BAPTISTE"], [
    "baptiste",
]],
[["Hero.BASTION"], [
    "bastion",
]],
[["Hero.BRIGITTE"], [
    "brigitte",
]],
[["Hero.DVA"], [
    "d.va",
]],
[["Hero.DOOMFIST"], [
    "doomfist",
]],
[["Hero.GENJI"], [
    "genji",
]],
[["Hero.HANZO"], [
    "hanzo",
]],
[["Hero.JUNKRAT"], [
    "junkrat",
]],
[["Hero.LUCIO"], [
    "lúcio",
]],
[["Hero.MCCREE"], [
    "mccree",
]],
[["Hero.MEI"], [
    "mei",
]],
[["Hero.MERCY"], [
    "mercy",
]],
[["Hero.MOIRA"], [
    "moira",
]],
[["Hero.ORISA"], [
    "orisa",
]],
[["Hero.PHARAH"], [
    "pharah",
]],
[["Hero.REAPER"], [
    "reaper",
]],
[["Hero.REINHARDT"], [
    "reinhardt",
]],
[["Hero.ROADHOG"], [
    "roadhog",
]],
[["Hero.SOLDIER"], [
    "soldier:76",
]],
[["Hero.SOMBRA"], [
    "sombra",
]],
[["Hero.SYMMETRA"], [
    "symmetra",
]],
[["Hero.TORBJORN"], [
    "torbjörn",
]],
[["Hero.TRACER"], [
    "tracer",
]],
[["Hero.WIDOWMAKER"], [
    "widowmaker",
]],
[["Hero.WINSTON"], [
    "winston",
]],
[["Hero.HAMMOND"], [
    "wreckingball",
]],
[["Hero.ZARYA"], [
    "zarya",
]],
[["Hero.ZENYATTA"], [
    "zenyatta",
]],

];

var boolKw = [

[["false"], [
	"false",
]],
[["null"], [
	"null",
]],
[["true"], [
	"true",
]],

];

var roundKw = [

[["ROUND_UP"], [
	"up",
]],
[["ROUND_DOWN"], [
	"down",
]],

];

var operationKw = [

[["_appendToArray"], [
	"appendToArray",
]],

];

var visibleToKw = [


];

var teamKw = [

[["TEAM_ALL"], [
	"allTeams",
]],

];

var positionKw = [

[["Position.LEFT"], [
	"left",
]],
[["Position.TOP"], [
	"top",
]],
[["Position.RIGHT"], [
	"right",
]],

];

var colorKw = [

[["Color.BLUE"], [
	"blue",
]],
[["Color.GREEN"], [
	"green",
]],
[["Color.PURPLE"], [
	"purple",
]],
[["Color.RED"], [
	"red",
]],
[["Color.TEAM_1"], [
	"team1",
]],
[["Color.TEAM_2"], [
	"team2",
]],
[["Color.WHITE"], [
	"white",
]],
[["Color.YELLOW"], [
	"yellow",
]],

];

var effectKw = [

[["Effect.BAD_AURA"], [
    "badaura",
]],
[["Effect.BAD_AURA_SOUND"], [
    "badaurasound",
]],
[["Effect.BEACON_SOUND"], [
    "beaconsound",
]],
[["Effect.CLOUD"], [
    "cloud",
]],
[["Effect.DECAL_SOUND"], [
    "decalsound",
]],
[["Effect.ENERGY_SOUND"], [
    "energysound",
]],
[["Effect.GOOD_AURA"], [
    "goodaura",
]],
[["Effect.GOOD_AURA_SOUND"], [
    "goodaurasound",
]],
[["Effect.LIGHT_SHAFT"], [
    "lightshaft",
]],
[["Effect.ORB"], [
    "orb",
]],
[["Effect.PICK-UP_SOUND"], [
    "pick-upsound",
]],
[["Effect.RING"], [
    "ring",
]],
[["Effect.SMOKE_SOUND"], [
    "smokesound",
]],
[["Effect.SPARKLES"], [
    "sparkles",
]],
[["Effect.SPARKLES_SOUND"], [
    "sparklessound",
]],
[["Effect.SPHERE"], [
    "sphere",
]],

];

var playEffectKw = [

[["Effect.BAD_EXPLOSION"], [
    "badexplosion",
]],
[["Effect.BAD_PICKUP_EFFECT"], [
    "badpickupeffect",
]],
[["Effect.BUFF_EXPLOSION_SOUND"], [
    "buffexplosionsound",
]],
[["Effect.BUFF_IMPACT_SOUND"], [
    "buffimpactsound",
]],
[["Effect.DEBUFF_IMPACT_SOUND"], [
    "debuffimpactsound",
]],
[["Effect.EXPLOSION_SOUND"], [
    "explosionsound",
]],
[["Effect.GOOD_EXPLOSION"], [
    "goodexplosion",
]],
[["Effect.GOOD_PICKUP_EFFECT"], [
    "goodpickupeffect",
]],
[["Effect.RING_EXPLOSION"], [
    "ringexplosion",
]],
[["Effect.RING_EXPLOSION_SOUND"], [
    "ringexplosionsound",
]],

];

var iconKw = [

[["Icon.ARROW_DOWN"], [
    "arrow:down",
]],
[["Icon.ARROW_LEFT"], [
    "arrow:left",
]],
[["Icon.ARROW_RIGHT"], [
    "arrow:right",
]],
[["Icon.ARROW_UP"], [
    "arrow:up",
]],
[["Icon.ASTERISK"], [
    "asterisk",
]],
[["Icon.BOLT"], [
    "bolt",
]],
[["Icon.CHECKMARK"], [
    "checkmark",
]],
[["Icon.CIRCLE"], [
    "circle",
]],
[["Icon.CLUB"], [
    "club",
]],
[["Icon.DIAMOND"], [
    "diamond",
]],
[["Icon.DIZZY"], [
    "dizzy",
]],
[["Icon.EXCLAMATION_MARK"], [
    "exclamationmark",
]],
[["Icon.EYE"], [
    "eye",
]],
[["Icon.FIRE"], [
    "fire",
]],
[["Icon.FLAG"], [
    "flag",
]],
[["Icon.HALO"], [
    "halo",
]],
[["Icon.HAPPY"], [
    "happy",
]],
[["Icon.HEART"], [
    "heart",
]],
[["Icon.MOON"], [
    "moon",
]],
[["Icon.NO"], [
    "no",
]],
[["Icon.PLUS"], [
    "plus",
]],
[["Icon.POISON"], [
    "poison",
]],
[["Icon.POISON_2"], [
    "poison2",
]],
[["Icon.QUESTION_MARK"], [
    "questionmark",
]],
[["Icon.RADIOACTIVE"], [
    "radioactive",
]],
[["Icon.RECYCLE"], [
    "recycle",
]],
[["Icon.RING_THICK"], [
    "ringthick",
]],
[["Icon.RING_THIN"], [
    "ringthin",
]],
[["Icon.SAD"], [
    "sad",
]],
[["Icon.SKULL"], [
    "skull",
]],
[["Icon.SPADE"], [
    "spade",
]],
[["Icon.SPIRAL"], [
    "spiral",
]],
[["Icon.STOP"], [
    "stop",
]],
[["Icon.TRASHCAN"], [
    "trashcan",
]],
[["Icon.WARNING"], [
    "warning",
]],
[["Icon.CROSS"], [
    "x",
]],

];

var reevaluationKw = [

[["Reeval.DIRECTION_RATE_AND_MAX_SPEED"], [
	"directionRateAndMaxSpeed",
]],
[["Reeval.RECEIVERS_DAMAGERS_AND_DMGPERCENT"], [
	"receiversDamagersAndDamagePercent",
]],
[["Reeval.VISIBILITY"], [
	"visibleTo",
]],
[["Reeval.VISIBILITY_AND_POSITION"], [
	"visibleToAndPosition",
]],
[["Reeval.VISIBILITY_AND_STRING"], [
	"visibleToAndString",
]],
[["Reeval.VISIBILITY_POSITION_AND_RADIUS"], [
	"visibleToPositionAndRadius",
]],
[["Reeval.VISIBILITY_POSITION_AND_STRING"], [
	"visibleToPositionAndString",
]],
[["Reeval.DESTINATION_AND_RATE"], [
	"destinationAndRate",
]],
[["Reeval.DESTINATION_AND_DURATION"], [
	"destinationAndDuration",
]],
[["Reeval.NONE"], [
	"none",
]],

];

var relativeKw = [

[["RELATIVE_TO_PLAYER"], [
	"toPlayer",
]],
[["RELATIVE_TO_WORLD"], [
	"toWorld",
]],

];

var impulseKw = [

[["CANCEL_CONTRARY_MOTION"], [
	"cancelContraryMotion",
]],
[["INCORPORATE_CONTRARY_MOTION"], [
	"incorporateContraryMotion",
]],

];

var buttonKw = [

[["Button.ABILITY_1"], [
    "ability1",
]],
[["Button.ABILITY_2"], [
    "ability2",
]],
[["Button.CROUCH"], [
    "crouch",
]],
[["Button.INTERACT"], [
    "interact",
]],
[["Button.JUMP"], [
    "jump",
]],
[["Button.PRIMARY_FIRE"], [
    "primaryfire",
]],
[["Button.SECONDARY_FIRE"], [
    "secondaryfire",
]],
[["Button.ULTIMATE"], [
    "ultimate",
]],

];


var waitKw = [

[["Wait.ABORT_WHEN_FALSE"], [
	"abortWhenFalse",
]],
[["Wait.IGNORE_CONDITION"], [
	"ignoreCondition",
]],
[["Wait.RESTART_WHEN_TRUE"], [
	"restartWhenTrue",
]],

];

var transformationKw = [

[["Transform.ROTATION"], [
	"rotation",
]],
[["Transform.ROTATION_AND_TRANSLATION"], [
	"rotationAndTranslation",
]],

];

var losCheckKw = [

[["LosCheck.OFF"], [
    "off",
]],
[["LosCheck.SURFACES"], [
    "surfaces",
]],
[["LosCheck.SURFACES_AND_ALL_BARRIERS"], [
    "surfacesandallbarriers",
]],
[["LosCheck.SURFACES_AND_ENEMY_BARRIERS"], [
    "surfacesandenemybarriers",
]],
[["LosCheck.BLOCKED_BY_ENEMY_BARRIERS"], [
    "enemyBarriersBlockLos",
]],
[["LosCheck.BLOCKED_BY_ALL_BARRIERS"], [
    "allBarriersBlockLos",
]],
[["LosCheck.PASS_THROUGH_BARRIERS"], [
    "barriersDoNotBlockLos",
]],

];

var statusKw = [

[["Status.ASLEEP"], [
    "asleep",
]],
[["Status.BURNING"], [
    "burning",
]],
[["Status.FROZEN"], [
    "frozen",
]],
[["Status.HACKED"], [
    "hacked",
]],
[["Status.INVINCIBLE"], [
    "invincible",
]],
[["Status.KNOCKED_DOWN"], [
    "knockeddown",
]],
[["Status.PHASED_OUT"], [
    "phasedout",
]],
[["Status.ROOTED"], [
    "rooted",
]],
[["Status.STUNNED"], [
    "stunned",
]],
[["Status.UNKILLABLE"], [
    "unkillable",
]],

];

var commsKw = [

[["Comms.ACKNOWLEDGE"], [
    "acknowledge",
]],
[["Comms.EMOTE_DOWN"], [
    "emotedown",
]],
[["Comms.EMOTE_LEFT"], [
    "emoteleft",
]],
[["Comms.EMOTE_RIGHT"], [
    "emoteright",
]],
[["Comms.EMOTE_UP"], [
    "emoteup",
]],
[["Comms.GROUP_UP"], [
    "groupup",
]],
[["Comms.HELLO"], [
    "hello",
]],
[["Comms.NEED_HEALING"], [
    "needhealing",
]],
[["Comms.THANKS"], [
    "thanks",
]],
[["Comms.ULTIMATE_STATUS"], [
    "ultimatestatus",
]],
[["Comms.VOICE_LINE_DOWN"], [
    "voicelinedown",
]],
[["Comms.VOICE_LINE_LEFT"], [
    "voicelineleft",
]],
[["Comms.VOICE_LINE_RIGHT"], [
    "voicelineright",
]],
[["Comms.VOICE_LINE_UP"], [
    "voicelineup",
]],

];

var clipKw = [

[["Clip.SURFACES"], [
	"clipAgainstSurfaces",
]],
[["Clip.NONE"], [
	"doNotClip",
]],

];

//This is not a keyword list like the others (used for translation).
//Rather, it is a list of keywords that can be integrated into strings (eg: hero names, team names, numbers, etc).
var stringKw = [];
for (var i = 0; i < heroKw.length; i++) {
	stringKw.push(heroKw[i][0][0]);
}

//A constant is defined as anything that isn't a function (or variable).
var constantKw = heroKw.concat(boolKw).concat(roundKw).concat(operationKw).concat(visibleToKw).concat(teamKw).concat(positionKw).concat(colorKw).concat(reevaluationKw).concat(waitKw).concat(effectKw).concat(iconKw).concat(relativeKw).concat(impulseKw).concat(buttonKw).concat(transformationKw).concat(losCheckKw).concat(statusKw).concat(commsKw).concat(playEffectKw).concat(clipKw);


//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
var valueKw = valueFuncKw.concat(constantKw).concat(heroKw);
"use strict";angular.module("nflteamstatstwoApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/team/:teamid",{templateUrl:"views/team.html",controller:"TeamCtrl",controllerAs:"team"}).when("/team",{templateUrl:"views/team.html",controller:"TeamCtrl",controllerAs:"team"}).otherwise({redirectTo:"/"})}]),angular.module("nflteamstatstwoApp").controller("MainCtrl",["$scope","Teams","$localStorage","$location",function(a,b,c,d){a.Teams=c.Teams,void 0===a.Teams&&(console.log("initializing team data"),a.Teams=b.query()),a.selectTeam=function(b){c.Teams=a.Teams,d.url("/team/"+b)}}]),angular.module("nflteamstatstwoApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("nflteamstatstwoApp").factory("Teams",["$resource",function(a){return a("https://crossorigin.me/http://api.sportradar.us/nfl-ot1/league/hierarchy.json?api_key=389g6jbbaj8ujf3nc97b6wj3",{},{query:{method:"GET",isArray:!1}})}]),angular.module("nflteamstatstwoApp").factory("TeamStats",["$resource",function(a){return a("https://crossorigin.me/http://api.sportradar.us/nfl-ot1/seasontd/2015/reg/teams/:teamid/statistics.json?api_key=389g6jbbaj8ujf3nc97b6wj3",{},{query:{method:"GET",params:{teamid:null},isArray:!1}})}]),function(){angular.module("nflteamstatstwoApp").controller("TeamCtrl",["$scope","$routeParams","TeamStats",function(a,b,c){a.teamid=b.teamid,a.TeamStats=c.query({teamid:a.teamid})}])}(),angular.module("nflteamstatstwoApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about-view"> <p> Thanks for checking out my NFL stats App! I hope to add more to it soon and make a more complete site. Thanks! </p> <p> In the meantime, check out this throwback episode from the Ball Boys Podcast! </p> <a href="ballboysupdate.mp3" download="ballboysupdate.mp3">Download Episode Here!</a> </div>'),a.put("views/main.html",'<div class="choose"> <p><h1> Choose an NFL team to view their 2015 season stats! </h1></p> </div> <div class="jumbotron" ng-controller="MainCtrl"> <p><h2>Select an NFL Team:</h2></p> <div ng-repeat="conference in Teams.conferences" label="{{conference.name}}" class="nfl-conference"> {{conference.name}} <div ng-repeat="division in conference.divisions" label="{{division.name}}" class="nfl-division"> {{division.name}} <select class="nfl-team-list" ng-model="team.id"> <option ng-repeat="team in division.teams" value="{{team.id}}"> {{team.name}} </option> </select> <p> <button class="btn btn-lg btn-primary" ng-click="selectTeam(team.id)">Get 2015 Team Stats!</button> </p> </div> </div> </div> <!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID --> <script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n'+"     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n     ga('create', 'UA-87408612-1', 'auto');\n     ga('send', 'pageview');</script>"),a.put("views/team.html",'<div ng-controller="TeamCtrl" class="results"> <h1>Team Stats for {{TeamStats.name}}</h1> <div> <h2> Touchdowns </h2> <dl class="touchdowns"> <dt>Passing Touchdowns</dt> <dd>{{TeamStats.record.touchdowns.pass}} ({{100*(TeamStats.record.touchdowns.pass/TeamStats.record.touchdowns.total).toFixed(2)}}%)</dd> <dt>Rushing Touchdowns</dt> <dd>{{TeamStats.record.touchdowns.rush}} ({{100*(TeamStats.record.touchdowns.rush/TeamStats.record.touchdowns.total).toFixed(2)}}%)</dd> <dt>Returned Touchdowns</dt> <dd>{{TeamStats.record.touchdowns.total_return}} ({{100*(TeamStats.record.touchdowns.total_return/TeamStats.record.touchdowns.total).toFixed(2)}}%)</dd> </dl> <h2> Rushing </h2> <dl class="rushing"> <dt>Rushing Average</dt> <dd>{{TeamStats.record.rushing.avg_yards}}</dd> <dt>Rushing Attempts</dt> <dd>{{TeamStats.record.rushing.attempts}}</dd> <dt>Rushing Touchdowns</dt> <dd>{{TeamStats.record.rushing.touchdowns}}</dd> <dt>Rushing Yards</dt> <dd>{{TeamStats.record.rushing.yards}}</dd> </dl> <h2> Receiving </h2> <dl class="receiving"> <dt>Receiving Targets</dt> <dd>{{TeamStats.record.receiving.targets}}</dd> <dt>Receiving Receptions</dt> <dd>{{TeamStats.record.receiving.receptions}}</dd> <dt>Receiving Average Yards</dt> <dd>{{TeamStats.record.receiving.avg_yards}}</dd> <dt>Receiving Yards</dt> <dd>{{TeamStats.record.receiving.yards}}</dd> <dt>Receiving Touchdowns</dt> <dd>{{TeamStats.record.receiving.touchdowns}}</dd> <dt>Yards After Catch (YAC)</dt> <dd>{{TeamStats.record.receiving.yards_after_catch}}</dd> </dl> <h2> Passing </h2> <dl class="passing"> <dt>Passing Attempts</dt> <dd>{{TeamStats.record.passing.attempts}}</dd> <dt>Passing Completions</dt> <dd>{{TeamStats.record.passing.completions}}</dd> <dt>Completion Percentage</dt> <dd>{{TeamStats.record.passing.cmp_pct}}</dd> <dt>Interceptions</dt> <dd>{{TeamStats.record.passing.interceptions}}</dd> <dt>Rating</dt> <dd>{{TeamStats.record.passing.rating}}</dd> <dt>Passing Touchdowns</dt> <dd>{{TeamStats.record.passing.touchdowns}}</dd> <dt>Passing Yards</dt> <dd>{{TeamStats.record.passing.yards}}</dd> </dl> <h2> Field Goals </h2> <dl class="field-goals"> <dt>Field Goal Attempts</dt> <dd>{{TeamStats.record.field_goals.attempts}}</dd> <dt>Field Goals Made</dt> <dd>{{TeamStats.record.field_goals.made}}</dd> <dt>Blocked Field Goals</dt> <dd>{{TeamStats.record.field_goals.blocked}}</dd> <dt>Average Yards</dt> <dd>{{TeamStats.record.field_goals.avg_yards}}</dd> <dt>Longest Field Goal</dt> <dd>{{TeamStats.record.field_goals.longest}}</dd> </dl> <!-- <p>\n    Passing Touchdowns: {{TeamStats.record.touchdowns.pass}} ({{100*(TeamStats.record.touchdowns.pass/TeamStats.record.touchdowns.total).toFixed(2)}}%)\n  </p>\n   \n   <p>\n    Rushing Touchdowns: {{TeamStats.record.touchdowns.rush}} ({{100*(TeamStats.record.touchdowns.rush/TeamStats.record.touchdowns.total).toFixed(2)}}%)\n  </p>\n   \n     \n   <p>\n     Touchdowns: {{TeamStats.record.touchdowns.rush}}\n   </p>\n--> <!--    \n  <ul>\n    <li ng-repeat="player in TeamStats.players">{{player.name}}</li>  \n  </ul> --> </div> <!-- {{TeamStats | json}} --> </div> <!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID --> <script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n'+"     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n     ga('create', 'UA-87408612-1', 'auto');\n     ga('send', 'pageview');</script>")}]);
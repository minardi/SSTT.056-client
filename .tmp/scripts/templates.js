this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/BacklogItemEdit/BacklogItemEditSprintTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <span class = "title">Edit Sprint</span>\r\n\r\n    <span class = "legend">Title*:</span>\r\n    <input class = "input required" type = "text" name = "title" value = "' +
((__t = ( title )) == null ? '' : __t) +
'"/>\r\n\r\n    <span class = "legend">Description:</span>\r\n    <textarea class = "input" size = 300 name = "description"></textarea>\r\n\r\n    <div class="input-daterange">\r\n\r\n        <span class = "legend">Start*:</span>\r\n        <input class = "input start-date required calendar" type = "text" name = "start" readonly="true" />\r\n\r\n        <span class = "legend">End*:</span>\r\n        <input class = "input end-date required calendar" type = "text" name = "end" readonly="true" />\r\n\r\n    </div>\r\n    \r\n    <div class = "save_button btn btn-default">Start sprint</div>\r\n    <div class = "cancel_button btn btn-default">Cancel</div>\r\n\r\n    <div class = "error-box"></div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/BacklogItemEdit/BacklogItemEditStoryTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <span class = "title">Edit Story</span>\r\n    <span class = "legend">Title*:</span>\r\n    <input class = "input required" type = "text" name = "title" value = "' +
((__t = ( title )) == null ? '' : __t) +
'"/>\r\n\r\n    <span class = "legend">Description:</span>\r\n    <textarea class = "input" size = 300 name = "description">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n\r\n    <span class = "legend">Estimation*:</span>\r\n    <input class = "input required" type = "text" name = "estimation" value = "' +
((__t = ( estimation )) == null ? '' : __t) +
'"/>\r\n\r\n    <div class = "save_button btn btn-default">Save</div>\r\n    <div class = "cancel_button btn btn-default">Cancel</div>\r\n\r\n    <div class = "error-box"></div>';

}
return __p
};

this["JST"]["app/scripts/BacklogItemEdit/BacklogItemEditTaskTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <span class = "title">Edit Task</span>\r\n    <span class = "legend">Title*:</span>\r\n    <input class = "input required" type = "text" name = "title" value = "' +
((__t = ( title )) == null ? '' : __t) +
'"/>\r\n\r\n    <span class = "legend">Description:</span>\r\n    <textarea class = "input" size = 300 name = "description">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n\r\n    <span class = "legend">Estimation*:</span>\r\n    <input class = "input required" type = "text" name = "estimation" value = "' +
((__t = ( estimation )) == null ? '' : __t) +
'"/>\r\n\r\n    <div class = "save_button btn btn-default">Save</div>\r\n    <div class = "cancel_button btn btn-default">Cancel</div>\r\n\r\n    <div class = "error-box"></div>';

}
return __p
};

this["JST"]["app/scripts/Chart/BurndownTooltipTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'burndown-chart-tooltip\'></div>';

}
return __p
};

this["JST"]["app/scripts/Confirmation/ConfirmationAlertTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <span class = "title">' +
((__t = ( title )) == null ? '' : __t) +
'</span>\r\n\r\n    <p><span class = "message">' +
((__t = ( message )) == null ? '' : __t) +
'</span>\r\n    \r\n    <div class = "confirm btn btn-default">Ok</div>';

}
return __p
};

this["JST"]["app/scripts/Confirmation/ConfirmationConfirmTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <span class = "title">' +
((__t = ( title )) == null ? '' : __t) +
'</span>\r\n\r\n    <p><span class = "message">' +
((__t = ( message )) == null ? '' : __t) +
'</span>\r\n    \r\n    <div class = "confirm btn btn-default">Yes</div>\r\n    <div class = "decline btn btn-default">No</div>';

}
return __p
};

this["JST"]["app/scripts/Confirmation/ConfirmationPopUpTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "popup">\r\n\t<p><span class = "message">' +
((__t = ( message )) == null ? '' : __t) +
'</span>\r\n\t</div>';

}
return __p
};

this["JST"]["app/scripts/ContextMenu/ContextMenuCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="ContextMenu">\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/PlanningBoard/PlanningBoardTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="backlog-box product-backlog">    \r\n</div>\r\n<div class="backlog-box sprint-backlog">\r\n</div>\r\n';
 if (role === "techlead") { ;
__p += '\r\n     <div class="btn btn-info start-sprint" disabled>Start sprint</div>\r\n';
 } ;


}
return __p
};

this["JST"]["app/scripts/ProductBacklog/ProductBacklogCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="backlog-box-name">   \r\n    ProductBacklog\r\n    <div class="backlog-box-actions">\r\n    ';
 if (role === "techlead") { ;
__p += '\r\n        <button class="add-new-story btn-new-story">+</button>\r\n    ';
 } ;
__p += '\r\n    </div>\r\n</div> \r\n<div class="backlogstory-list">\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/ProductBacklog/ProductBacklogTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>' +
((__t = ( title )) == null ? '' : __t) +
'</span>';

}
return __p
};

this["JST"]["app/scripts/Projectinfo/BacklogItemInfoTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  <ul class="list-unstyled">\r\n    <li>Type: ' +
((__t = ( item_type )) == null ? '' : __t) +
'</li>\r\n    <li>Title: ' +
((__t = ( title )) == null ? '' : __t) +
'</li>\r\n    ';
 if(description.trim().length) { 
    	print ("<li>Description: " + description + "</li>");
	} ;
__p += '\r\n    <li>Estimation: ' +
((__t = ( estimation )) == null ? '' : __t) +
'</li>\r\n</ul>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Projectinfo/ProjectinfoTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n\t<ul class="list-unstyled">\r\n    <li>Description: ' +
((__t = ( description )) == null ? '' : __t) +
'</li>\r\n    <li>DateStart: ' +
((__t = ( start )) == null ? '' : __t) +
'</li>\r\n    <li>DateFinish: ' +
((__t = ( finish )) == null ? '' : __t) +
'</li>\r\n    <li>PM: ' +
((__t = ( pm.first_name + " " + pm.last_name )) == null ? '' : __t) +
' </li>\r\n    <li>Role: ' +
((__t = ( role )) == null ? '' : __t) +
' </li>\r\n</ul>\r\n\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/Projectinfo/UserInfoTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n    ' +
((__t = ( first_name )) == null ? '' : __t) +
'\r\n    ' +
((__t = ( last_name )) == null ? '' : __t) +
'\r\n</div>\r\n<div>\r\n    <p>Role in current project:</p>\r\n    ' +
((__t = ( role )) == null ? '' : __t) +
'\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Projectinfo/UserProjectInfoTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n    ' +
((__t = ( title )) == null ? '' : __t) +
'\r\n    ' +
((__t = ( description )) == null ? '' : __t) +
'\r\n    ' +
((__t = ( role )) == null ? '' : __t) +
'\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Projects/ProjectsCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="title project-page" >\r\n    My Projects\r\n    <div class="actions">\r\n        <span class="hide btn btn-default glyphicon glyphicon-plus">\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class="content project-page" >\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Projects/ProjectsTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="name"> Title ' +
((__t = ( title )) == null ? '' : __t) +
' </p>\r\n<p> Description ' +
((__t = ( description )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["app/scripts/ScrumBoard/ScrumBoardCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class = "panel-body tasks-header">\r\n    <div class="header-todo">To Do</div>\r\n    <div class="header-in-progress">In progress</div>\r\n    <div class="header-to-verify">To verify</div>\r\n    <div class="header-done last">Done</div>\r\n</div>\r\n\r\n<div class = "panel-body tasks">\r\n    <div class="todo">\r\n    </div>\r\n\r\n    <div class="in-progress">\r\n    </div>\r\n\r\n    <div class="to-verify">\r\n    </div>\r\n\r\n    <div class="done">\r\n    </div>\r\n</div>\r\n\r\n';
 if (role === "techlead" && sprint_status === "active") { ;
__p += '\r\n    <button class = "btn btn-info stop-sprint">Stop sprint</button>\r\n';
 } ;


}
return __p
};

this["JST"]["app/scripts/ScrumBoard/ScrumBoardTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="task">\r\n\t<div class="arrow-left centered-block"><div class="centered-text"><</div></div>\r\n\t' +
((__t = ( title )) == null ? '' : __t) +
'<br>' +
((__t = ( description )) == null ? '' : __t) +
'\r\n\t<div class="arrow-right centered-block"><div class="centered-text">></div></div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/ScrumPage/ScrumPageTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="scrum-page-header nav scrum-page">\r\n    <div class="col-xs-4 tab" id="planning">\r\n        <span class = "glyphicon glyphicon-list-alt"></span>\r\n        Planning\r\n    </div>\r\n    \r\n    <div class="col-xs-4 tab" id="scrumboard">\r\n        <span class = "glyphicon glyphicon-tasks"></span>\r\n        Scrum Board\r\n    </div>\r\n    \r\n    <div class="col-xs-4 tab" id="stat" >\r\n        <span class = "glyphicon glyphicon-stats"></span>\r\n        Statistics\r\n    </div>\r\n</div>\r\n\r\n<div class="content scrum-page" id="ScrumPage"></div>\r\n';

}
return __p
};

this["JST"]["app/scripts/SprintBacklog/SprintBacklogCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backlog-box-name"> \r\n    SprintBacklog\r\n    <div class="backlog-box-actions">\r\n    </div>\r\n</div>\r\n<div class="sprintstory-list"></div>';

}
return __p
};

this["JST"]["app/scripts/SprintBacklog/SprintBacklogStoryTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "story-box">\r\n\t<span>' +
((__t = ( title )) == null ? '' : __t) +
'</span>\r\n\t<button class="add-new-task btn-new-task hidden">+</button>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/SprintBacklog/SprintBacklogTaskTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "task-box"><span>' +
((__t = ( title )) == null ? '' : __t) +
'</span></div>';

}
return __p
};

this["JST"]["app/scripts/Statistics/StatisticsCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<select class="sprint-list">\r\n    <option disabled>select the Sprint</option>\r\n</select>\r\n<div class="burndown-chart"></div>\r\n<div class="sprint-statistics"></div>';

}
return __p
};

this["JST"]["app/scripts/Statistics/StatisticsSprintTableTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["app/scripts/Statistics/StatisticsTableRowTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="' +
((__t = ( css_class )) == null ? '' : __t) +
'">\r\n    <td>' +
((__t = ( date )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( title )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( status )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( estimation )) == null ? '' : __t) +
'</td>\r\n</tr>';

}
return __p
};

this["JST"]["app/scripts/Statistics/StatisticsTableTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="table table-bordered table-hover">\r\n    <tr class="active">\r\n        <th>Date</th>\r\n        <th>Issue</th>\r\n        <th>Issue type</th>\r\n        <th>Issue Status</th>\r\n        <th>Story Points</th>\r\n    </tr>\r\n</table>';

}
return __p
};

this["JST"]["app/scripts/Statistics/StatisticsTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( title )) == null ? '' : __t);

}
return __p
};

this["JST"]["app/scripts/TeamCandidates/TeamCandidatesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="users-box-name">\r\n    All Users\r\n</div> \r\n<div class="users-list">\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/TeamCandidates/TeamCandidatesTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( first_name + " " + last_name + " " )) == null ? '' : __t) +
'\r\n<em class="text-info"> ' +
((__t = ( role )) == null ? '' : __t) +
' </em>\r\n';

}
return __p
};

this["JST"]["app/scripts/TeamEditPage/TeamEditPageTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="team-edit-page-header nav team-edit-page">\r\n    <div class="col-xs-4 tab" id="watchers">Watchers</div>\r\n    <div class="col-xs-4 tab" id="developers">Developers</div>\r\n    <div class="col-xs-4 tab" id="techleads">TechLeads</div>\r\n</div>\r\n\r\n<div class="content team-edit-page">\r\n    <div class="candidates"></div>\r\n    <div class="team-members"></div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "team-members-list">\r\n    <div class="users-box-name">Team members</div>\r\n</div>\r\n\r\n<button type="button" id ="save" class="btn btn-info">\r\n    Save\r\n</button>';

}
return __p
};

this["JST"]["app/scripts/TeamMembers/TeamMembersTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( first_name )) == null ? '' : __t) +
'\r\n' +
((__t = ( last_name )) == null ? '' : __t);

}
return __p
};

this["JST"]["app/scripts/Teams/TeamsCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="title team-page" >\r\n    My teams\r\n    <div class="actions">\r\n        <span class="hide btn btn-default glyphicon glyphicon-plus">\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class="content team-page">\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Teams/TeamsTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="name">' +
((__t = ( title )) == null ? '' : __t) +
' </p>\r\n<p> ' +
((__t = ( description )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["app/scripts/User/UserTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>\r\n    ' +
((__t = ( first_name )) == null ? '' : __t) +
'\r\n    ' +
((__t = ( last_name )) == null ? '' : __t) +
'\r\n</span>';

}
return __p
};
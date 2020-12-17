
import api768 from '../../images/qaengine/api.svg';
import design768 from '../../images/qaengine/design.svg';
import devices768 from '../../images/qaengine/devices.svg';
import loadtest768 from '../../images/qaengine/loadtest.svg';
import sql768 from '../../images/qaengine/sql.svg';
import theory768 from '../../images/qaengine/theory.svg';

import pencil768 from '../../images/courses/pencil-768.svg';
import teg768 from '../../images/courses/tag-768.svg';
import wrench768 from '../../images/courses/wrench-768.svg';
import lamp768 from '../../images/courses/lamp-768.svg';

import arrowRight from '../../images/courses/Group 2.svg';
import arrowLeft from '../../images/courses/Group.svg';
import share from '../../images/courses/share.svg';

export const BlockForCourses = {
    icon: qaIcon,
    text: 'text',
    juk: jukIcon,
};

export const afterCourseBlock = () => {
    const arrOfImg = [theory, design, devices, api, loadtest, sql];
    const arrOfImg768 = [theory768, design768, devices768, api768, loadtest768, sql768];
    return Array(6).fill(0).map((item, i) => {
        return {
            header: `qaengine.afterCourse.header_${i + 1}`,
            text: `qaengine.afterCourse.text_${i + 1}`,
            img: arrOfImg[i],
            img768: arrOfImg768[i],
        };
    });
};

export const Block = [
    {
        text: 'qaengine.about_course.time',
        icon: calendar,
    },
    {
        text: 'qaengine.about_course.place',
        icon: location,
    },
    {
        text: 'qaengine.about_course.prise',
        icon: hryvna,
    },
];

export const Materials = [
    {
        icon: devTools,
        text: devToolsText,
    },
    {
        icon: genymotion,
        text: genymotionText,
    },
    {
        icon: postman,
        text: postmanText,
    },
    {
        icon: jMeter,
        text: jMeterText,
    },
    {
        icon: android,
        text: androidText,
    },
    {
        icon: adb,
        text: adbText,
    },
    {
        icon: mySql,
        text: mySqlText,
    },
    {
        icon: charles,
        text: charlesText,
    },
];

export const Images = {
    facebookWhite,
    instagramWhite,
    linkedinWhite,
    photo,
    photo768,
    instagram,
    linkedin,
    facebook,
    arrowRight,
    arrowLeft,
    share,
    leftBrace,
    rightBrace,
    leftBraceSmall,
    rightBraceSmall,
    pencil768,
    lamp768,
    wrench768,
    teg768,
};

export const PlanOfCourse = [
    {
        lesson_1: 'qaengine.firstWords.lesson_1',
        lesson_2: 'qaengine.reactIntr.lesson_2',
        header_1: 'qaengine.firstWords.header',
        header_2: 'qaengine.reactIntr.header',
        element_l_1: 'qaengine.firstWords.activeListening',
        element_l_2: 'qaengine.firstWords.meetingSkills',
        element_l_3: 'qaengine.firstWords.feedback',
        element_l_4: 'qaengine.firstWords.issue',
        element_l_5: 'qaengine.firstWords.automation',
        element_r_1: 'qaengine.reactIntr.testPlan',
        element_r_2: 'qaengine.reactIntr.testCase',
        element_r_3: 'qaengine.reactIntr.checkList',
        element_r_4: 'qaengine.reactIntr.bugReport',
        element_r_5: 'qaengine.reactIntr.practice',
    },
    {
        lesson_1: 'qaengine.reactApp.lesson_3',
        lesson_2: 'qaengine.linuxAndGit.lesson_4',
        header_1: 'qaengine.reactApp.header',
        header_2: 'qaengine.linuxAndGit.header',
        element_l_1: 'qaengine.reactApp.debagging',
        element_l_2: 'qaengine.reactApp.webpack1',
        element_l_3: 'qaengine.reactApp.webpack2',
        element_r_1: 'qaengine.linuxAndGit.linuxGit',
        element_r_2: 'qaengine.linuxAndGit.linuxStart',
        element_r_3: 'qaengine.linuxAndGit.linuxDown',
        element_r_4: 'qaengine.linuxAndGit.linuxConsole',
        element_r_5: 'qaengine.linuxAndGit.git',
    },
    {
        lesson_1: 'qaengine.components.lesson_5',
        lesson_2: 'qaengine.lifeCycle.lesson_6',
        header_1: 'qaengine.components.header',
        header_2: 'qaengine.lifeCycle.header',
        element_l_1: 'qaengine.components.funcAndClassComp',
        element_l_2: 'qaengine.components.funcToClass',
        element_l_3: 'qaengine.components.composition',
        element_l_4: 'qaengine.components.data',
        element_r_1: 'qaengine.lifeCycle.htmlCssJs',
        element_r_2: 'qaengine.lifeCycle.devTools',
        element_r_3: 'qaengine.lifeCycle.testVerstka',
        element_r_4: 'qaengine.lifeCycle.allDevices',
        element_r_5: 'qaengine.lifeCycle.crossBrovser',
    },
    {
        lesson_1: 'qaengine.task_7.lesson_7',
        lesson_2: 'qaengine.task_8.lesson_8',
        header_1: 'qaengine.task_7.header',
        header_2: 'qaengine.task_8.header',
        element_l_1: 'qaengine.task_7.plugins',
        element_l_2: 'qaengine.task_7.practice',
        element_r_1: 'qaengine.task_8.apiTypes',
        element_r_2: 'qaengine.task_8.jsonXml',
        element_r_3: 'qaengine.task_8.postman',
        element_r_4: 'qaengine.task_8.testApi',
    },
    {
        lesson_1: 'qaengine.task_9.lesson_9',
        lesson_2: 'qaengine.task_10.lesson_10',
        header_1: 'qaengine.task_9.header',
        header_2: 'qaengine.task_10.header',
        element_l_1: 'qaengine.task_9.varsCols',
        element_l_2: 'qaengine.task_9.preRequest',
        element_l_3: 'qaengine.task_9.monitor',
        element_l_4: 'qaengine.task_9.newman',
        element_l_5: 'qaengine.task_9.jenkins',
        element_r_1: 'qaengine.task_10.nagrTest',
        element_r_2: 'qaengine.task_10.speedTest',
        element_r_3: 'qaengine.task_10.jmeter',
        element_r_4: 'qaengine.task_10.scenario',
    },
    {
        lesson_1: 'qaengine.taks_11.lesson_11',
        lesson_2: 'qaengine.taks_12.lesson_12',
        header_1: 'qaengine.taks_11.header',
        header_2: 'qaengine.taks_12.header',
        element_l_1: 'qaengine.taks_11.startDB',
        element_l_2: 'qaengine.taks_11.typesDB',
        element_l_3: 'qaengine.taks_11.subdSQL',
        element_l_4: 'qaengine.taks_11.testDB',
        element_r_1: 'qaengine.taks_12.mobTypes',
        element_r_2: 'qaengine.taks_12.testSpecials',
        element_r_3: 'qaengine.taks_12.testTools',
        element_r_4: 'qaengine.taks_12.testDefects',
    },
    {
        lesson_1: 'qaengine.taks_13.lesson_13',
        lesson_2: 'qaengine.taks_14.lesson_14',
        header_1: 'qaengine.taks_13.header',
        header_2: 'qaengine.taks_14.header',
        element_l_1: 'qaengine.taks_13.findBugs',
        element_r_1: 'qaengine.taks_14.adb',
        element_r_2: 'qaengine.taks_14.mainCom',
        element_r_3: 'qaengine.taks_14.proxy',
        element_r_4: 'qaengine.taks_14.mobPer',
    },
    {
        lesson_1: 'qaengine.taks_15.lesson_15',
        header_1: 'qaengine.taks_15.header',
        element_l_1: 'qaengine.taks_15.interview',
        element_l_2: 'qaengine.taks_15.techSob',
        // lesson_2: 'qaengine.taks_14.lesson_14',
        // header_2: 'qaengine.taks_14.header',
    },
];

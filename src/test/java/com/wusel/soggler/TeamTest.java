package com.wusel.soggler;


import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by yk on 03/04/16.
 */
public class TeamTest {

    @Test
    public void testGetSetName() {
        String name1 = "daTeam";
        Team team = new Team(name1);
        assertEquals(name1, team.getName());
        String name2 = "daNewTeamName";
        team.setName(name2);
        assertEquals(name2, team.getName());
    }
}